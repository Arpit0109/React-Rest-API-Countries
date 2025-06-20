import React, { useContext, useState } from "react";
import { TheamContext } from "../contexts/TheamContext";

function Header() {
  const [isdark, setisdark] = useContext(TheamContext);

  // if(isdark)
  // {
  //    document.body.classList.add("dark");
  // }else{

  //    document.body.classList.remove("dark");
  // }

  return (
    <header className={`header-container ${isdark ? "dark" : ""} `}>
      <div className="header-content">
        <h2 className="title">
          <a href="/"> Where is the word</a>
        </h2>
        <p
          onClick={() => {
            setisdark(!isdark);
            localStorage.setItem("isDarkMode", !isdark);
          }}
          className="theme-changer"
        >
          <i className={`fa-solid fa-${isdark ? "sun" : "moon"}`}></i>
          {isdark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
}

export default Header;
