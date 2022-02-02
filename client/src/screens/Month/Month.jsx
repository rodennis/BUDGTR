import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddBillForm from "../../components/AddBillForm/AddBillForm";
import { monthUrl, billUrl } from "../../services/api";
import AddBudget from "../../components/AddBudget/AddBudget";
import MonthlyBills from "../../components/MonthlyBills/MonthlyBills";
import "./Month.css";

function Month({ months, bills, setToggle }) {
  const params = useParams();

  const [month, setMonth] = useState({});
  const [budget, setBudget] = useState(0);
  const [deletedBill, setDeletedBill] = useState(0);
  const [bill, setBill] = useState({
    name: "",
    date: "",
    price: 0,
    months: "",
  });

  useEffect(() => {
    const foundMonth = months.find((month) => {
      return month.id === parseInt(params.id);
    });
    setMonth(foundMonth);

    if (deletedBill) {
      const updateBudget = async () => {
        const addDeletedBill = parseInt(month?.budget) + deletedBill;
        await axios.put(`${monthUrl}/${params.id}/`, {
          ...month,
          budget: addDeletedBill,
        });
      };
      updateBudget();
    }
  }, [bills, deletedBill, month, months, params.id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBill({
      ...bill,
      [name]: value,
    });
  };

  const newBill = {
    name: bill.name,
    date: bill.date,
    price: bill.price,
    months: month && month.id,
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    month.bills.push(bill.name);
    const subtract = parseInt(month.budget) - bill.price;
    await axios.post(`${billUrl}/`, newBill);
    await axios.put(`${monthUrl}/${params.id}/`, {
      ...month,
      budget: subtract,
    });
    setToggle((prevToggle) => !prevToggle);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${monthUrl}/${params.id}/`, { ...month, budget: budget });
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className="single-month-div">
      {month.budget < 1 && (
        <AddBudget
          budget={budget}
          setBudget={setBudget}
          handleSubmit={handleSubmit}
        />
      )}
      <div>
        <h2>ADD A BILL</h2>
        <AddBillForm
          name={bill.name}
          date={bill.date}
          price={bill.price}
          handleChange={handleChange}
          onSubmit={onSubmit}
        />
        <div className="budget-title-div">
          <h2 className="budget-title">Budget: </h2>
          <span className="budget">${month?.budget}</span>
        </div>
      </div>

      <MonthlyBills
        bills={bills}
        setDeletedBill={setDeletedBill}
        setToggle={setToggle}
      />
    </div>
  );
}

export default Month;
