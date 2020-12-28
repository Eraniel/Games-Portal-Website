import React from "react";
import HeaderGamePG from "./HeaderGamePG.jsx";
import Footer from "./Footer.jsx";
import gamesList from "../list.js";
import { useParams } from "react-router-dom";

function GamePage() {
  let { id } = useParams();
  const img = "https://picsum.photos/400/260";
  let found = gamesList.find(function (game) {
    return game.Title === id;
  });

  return (
    <div id="game">
      <HeaderGamePG />
      <div className="gamepage-div">
        <div className="gamepage-div-main">
          <h2 className="gamepage-h2">{id}</h2>
          <p>{found.Genre}</p>
          <p>{found.Platforms}</p>
          <p>Game developers : {found.Developers}</p>
          <p>Game publishers : {found.Publisher}</p>
        </div>
        <div className="gamepage-image">
          <img src={img} alt="gameimg" />
        </div>
        <div className="gamepage-descript">
          <p>
            Lorem ipsum Deus ex In vine veritas Veni Vedi Vici Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default GamePage;
