import React from 'react';
import {Link} from 'react-router-dom'

function Months({months}) {
  return <div>
      {
          months.map((month, index) => (
              <div key={index}>
                  <Link to={`/${month.month}`}><h1>{month.month}</h1></Link>
              </div>
          ))
      }
  </div>;
}

export default Months;
