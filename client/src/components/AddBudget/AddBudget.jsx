import React from "react";

function AddBudget({ budget, handleSubmit, setBudget }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="add-budget-label">
          Add Budget:{" "}
          <input
            className="add-budget"
            type="text"
            value={budget}
            onChange={(e) => {
              setBudget(e.target.value);
            }}
            required
          />
        </label>
        <button className="add-budget-button">Add</button>
      </form>
    </div>
  );
}

export default AddBudget;
