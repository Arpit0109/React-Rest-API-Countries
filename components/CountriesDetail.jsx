// import {useWindowSize } from "../hooks/useWindoSize";

import { useWindowSize } from "../hooks/useWindoSize";

import React, { useContext, useEffect, useState } from "react";
import CountriesData from "../CountriesData";
import {
  Link,
  useLocation,
  useOutletContext,
  useParams,
} from "react-router-dom";
import "./CountriesDetail.css";
import { TheamContext } from "../contexts/TheamContext";
import { useTheam } from "../hooks/useTheam";

function CountriesDetail() {
  // const [isdark] = useOutletContext();
  const windoSize = useWindowSize();

  // const [isdark] = useContext(TheamContext);
     const [isdark] = useTheam();

  const params = useParams();

  const { state } = useLocation();
  // console.log(state);

  const countryName = params.CountriesDetail;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setnotFound] = useState(false);

  function updateCountryData(country) {
    if (!country) {
      setnotFound(true);
      return;
    }

    setCountryData({
      name: country.name.common,
      flags: country.flags.svg,
      nativeName: Object.values(country.name.nativeName || {})[0]?.common,
      population: country.population.toLocaleString("en-IN"),
      region: country.region,
      subregion: country.subregion,
      capital: country.capital?.[0],
      tld: country.tld?.[0],
      currencies: Object.values(country.currencies || {})
        .map((c) => c.name)
        .join(", "),
      Languages: Object.values(country.languages || {}).join(", "),
      borders: (country.borders || []).join(", ") || "None",
      // borders: ["india"],
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }
    try {
      const country = CountriesData.find(
        (c) => c.name.common.toLowerCase() === countryName?.toLowerCase()
      );
      updateCountryData(country);
    } catch (err) {
      setnotFound(true);
      console.error(err);
    }
  }, [countryName]);

  if (notFound) {
    return <div>Country not Found</div>;
  }

  // if (!countryData) return <p>Loading...</p>;

  return countryData === null ? (
    <p>Loading...</p>
  ) : (
    <main className={` ${isdark ? "dark" : ""} `}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        {/* <h1 style={{ textAlign: "center" }}>
          {windoSize.width} X {windoSize.height}{" "}
        </h1> */}

        <div className="country-details">
          <img src={countryData.flags} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name:</b> {countryData.nativeName}
              </p>
              <p>
                <b>Population:</b> {countryData.population}
              </p>
              <p>
                <b>Region:</b> {countryData.region}
              </p>
              <p>
                <b>Sub Region:</b> {countryData.subregion}
              </p>
              <p>
                <b>Capital:</b> {countryData.capital}
              </p>
              <p>
                <b>Top Level Domain:</b> {countryData.tld}
              </p>
              <p>
                <b>Currencies:</b> {countryData.currencies}
              </p>
              <p>
                <b>Languages:</b> {countryData.Languages}
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries:</b> {countryData.borders}
              {/* <b>Border Countries:</b> 
              {countryData.borders.map((border)=>(
                <Link key={border} to={`/${border}`}>{border}</Link>
              ))}
             */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountriesDetail;
