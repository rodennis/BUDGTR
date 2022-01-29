import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import AddBillForm from '../../components/AddBillForm/AddBillForm';

function Month({months}) {

    const params = useParams()

    const [month, setMonth] = useState({})
    const [bill, setBill] = useState({
        name: '',
        date: '',
        price: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBill({
          ...bill,
          [name]: value,
        });
      };

    useEffect(() => {
        const foundMonth = months.find(month =>{
            return month.month === params.month
        }) 
        setMonth(foundMonth)
    },[month, months, params.month])

  return <div>
      <AddBillForm name={bill.name} date={bill.date} price={bill.price} handleChange={handleChange}/>
  </div>;
}

export default Month;
