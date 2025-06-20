import React from "react";

import "./CountriesContainerShimer.css";

function CountriesContainerShimer() {
  // let array = new Array(10).fill( <div className='country-card shimer-card'></div>)

  const array = Array.from({ length: 10 }).map((el,i) => {
    return <div key={i} className="country-card shimer-card"></div>;
  });
  return <div className="countries-container">{array}</div>;
}

export default CountriesContainerShimer;
