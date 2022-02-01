import React from 'react';

function AddBudget({budget, handleSubmit, setBudget}) {
  return <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={budget}
          onChange={(e) => {
            setBudget(e.target.value
            )}}
        />
        <button>submit</button>
      </form>
  </div>;
}

export default AddBudget;
