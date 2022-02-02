import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {billUrl} from '../../services/api'
import {useParams} from 'react-router-dom'

function MonthlyBills({ bills, setDeletedBill, setToggle}) {

    const params = useParams()

    const [monthlyBills, setMonthlyBills] = useState([]);

    useEffect(() => {
        const foundBills = bills.filter((bill) => {
            return parseInt(bill.months) === parseInt(params.id);
          });
          setMonthlyBills(foundBills);
    },[bills, params.id])

  return <div>
      {monthlyBills &&
        monthlyBills.map((bill, index) => (
          <div className='single-bill-div' key={index}>
            <h2 className='new-bill-name'>{bill.name}</h2>
            <h4 className='new-bill-date'>Due Date: {bill.date}</h4>
            <h4 className='new-bill-price'>Price: {bill.price}</h4>
            <button
              onClick={async () => {
                setDeletedBill(parseInt(bill.price));
                await axios.delete(`${billUrl}/${bill.id}/`);
                setToggle(prevToggle => !prevToggle)

              }}
            >
              Delete
            </button>
          </div>
        ))}
  </div>;
}

export default MonthlyBills;
