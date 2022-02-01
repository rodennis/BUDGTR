import React from 'react';

function AddBillForm({name, price, date, handleChange, onSubmit}) {
  return <div>
      <form onSubmit={onSubmit}>
          <input onChange={handleChange} type="text" placeholder='name' name='name' value={name}/>
          <input onChange={handleChange} type="text" placeholder='date' name='date' value={date}/>
          <input onChange={handleChange} type="text" placeholder='Amount' name='price' value={price}/>
          <button>Submit</button>
      </form>
  </div>;
}

export default AddBillForm;
