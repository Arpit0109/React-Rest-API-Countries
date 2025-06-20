import CountryCard from "./CountryCard";
import CountriesData from "../CountriesData";
import { useEffect, useState } from "react";

import CountriesContainerShimer from "./CountriesContainerShimer";
import { useLocation } from "react-router-dom";

function CountriesContainer({ query }) {
  // const [query, setquery] = useState("");
  // const filterCountres = CountriesData.filter((country) =>
  //   country.name.common.toLowerCase().includes(query.toLowerCase())
  // );

  // const [countriesData, setCountriesData] = useState([]);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCountriesData(data);
  //     });

  //   const intervalId = setInterval(() => {
  //     console.log("running countriesList component");
  //   }, [1000]);

  //   console.log(intervalId);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("hiii");
  // }, [count]);

  return (
    <>
      {/* <CountriesContainerShimer/> */}
      {!CountriesData.length ? (
        <CountriesContainerShimer />
      ) : (
        <div className="countries-container">
          {CountriesData.filter(
            (country) =>
              country.name.common.toLowerCase().includes(query.toLowerCase()) ||
              country.region.toLowerCase().includes(query.toLowerCase())
          ).map((country) => (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              population={country.population.toLocaleString("en-IN")}
              capital={country.capital}
              region={country.region}
              flags={country.flags.svg}
              data={country}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default CountriesContainer;
