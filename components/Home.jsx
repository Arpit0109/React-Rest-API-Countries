import {useWindowSize } from "../hooks/useWindoSize";
import { useContext, useEffect, useState } from "react";

import "../App.css";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesContainer from "./CountriesContainer";
import { useOutletContext } from "react-router-dom";
import { TheamContext } from "../contexts/TheamContext";
import { useTheam } from "../hooks/useTheam";



function Home({ context }) {


  const [query, setquery] = useState("");

  const [isdark] = useTheam();
  
  const windoSize = useWindowSize();
  return (
    <main className={`${isdark ? "dark" : ""}`}>
      <div className="search-filter-container ">
        <SearchBar setquery={setquery} />
        <SelectMenu setquery={setquery} />
      </div>
      {/* <h1 style={{ textAlign: "center" }}>{windoSize.width} X {windoSize.height} </h1> */}
      <CountriesContainer query={query} />
    </main>
  );
}

export default Home;
