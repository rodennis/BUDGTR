import React from "react";
import "./Months.css";
import MonthCards from "../../components/MonthCards/MonthCards";

function Months({ months }) {
  return (
    <>
      <MonthCards months={months} />
    </>
  );
}

export default Months;
