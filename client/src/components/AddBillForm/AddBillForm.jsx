import React from 'react';

function AddBillForm({name, price, date, handleChange}) {
  return <div>
      <form>
          <input onChange={handleChange} type="text" placeholder='name' name='name' value={name}/>
          <input onChange={handleChange} type="text" placeholder='date' name='date' value={date}/>
          <input onChange={handleChange} type="text" placeholder='Amount' name='price' value={price}/>
      </form>
  </div>;
}

export default AddBillForm;
