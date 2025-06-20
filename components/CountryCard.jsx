import React from "react";
import { Link } from "react-router-dom";

function CountryCard({ name, population, region, capital, flags,data }) {
  return (
    <Link className="country-card" to={`/${name}`} state={data}>
      <img src={flags} alt="" />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population}{" "}
        </p>
        <p>
          <b>Region: </b>
          {region}{" "}
        </p>
        <p>
          <b>Captial: </b> {capital}{" "}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
