import React from "react";
import { Link } from "react-router-dom";

function MonthCards({ months }) {
  return (
    <div className="months-div">
      {months.map((month, index) => (
        <div className="single-month" key={index}>
          <Link className="single-month-link" to={`/${month.id}`}>
            <h1>{month.month}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MonthCards;
