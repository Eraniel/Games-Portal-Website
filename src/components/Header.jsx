import React from "react";
import { Link } from "react-router-dom";

function Header() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "29%";
    document.getElementById("main").style.marginRight = "29%"; //content
  }

  return (
    <header>
      <h1>
        <Link to="/">New games coming</Link>
      </h1>
      <button className="button-header" onClick={openNav}>
        <i className="fas fa-sliders-h"></i> Filters
      </button>
    </header>
  );
}

export default Header;
