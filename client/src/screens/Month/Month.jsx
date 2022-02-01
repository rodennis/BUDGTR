import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddBillForm from "../../components/AddBillForm/AddBillForm";
import {monthUrl, billUrl} from '../../services/api'

function Month({ months, bills }) {
  const params = useParams();

  const [monthlyBills, setMonthlyBills] = useState([])
  const [month, setMonth] = useState({});
  const [budget, setBudget] = useState('')
  const [bill, setBill] = useState({
    name: "",
    date: "",
    price: 0,
    months: ""
  });

  useEffect(() => {
    const foundMonth = months.find((month) => {
      return month.id === parseInt(params.id);
    });
    setMonth(foundMonth);

    const foundBills = bills.filter(bill => {
      return parseInt(bill.months) === parseInt(params.id)
    })
    setMonthlyBills(foundBills)
  }, [bills, month, months, params.id]);

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
    const subtract = parseInt(month.budget) - bill.price
    await axios.post(billUrl, newBill);
    await axios.put(monthUrl, {...month, budget: subtract});
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(monthUrl, {...month, budget: budget})
  }

  const handleDelete = async (e) => {
    e.preventDefault()

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={budget} onChange={e => setBudget(e.target.value)}/>
        <button>submit</button>
      </form>
      <AddBillForm
        name={bill.name}
        date={bill.date}
        price={bill.price}
        handleChange={handleChange}
        onSubmit={onSubmit}
      />

      {
        monthlyBills &&

        monthlyBills.map((bill, index) => (
          <div key={index}>
            <h2>{bill.name}</h2>
            <h4>Due Date: {bill.date}</h4>
            <h4>Price: {bill.price}</h4>
            <button onClick={handleDelete}>Delete</button>
          </div>
        ))
      }
    </div>
  );
}

export default Month;
