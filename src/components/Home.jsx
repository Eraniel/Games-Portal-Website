import React, { useState } from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Searchbar from "./Searchbar.jsx";
import GameRendering from "./GameRendering.jsx";
import FilterBy from "./FilterBy.jsx";
import SortBy from "./SortBy.jsx";

function Home(props) {
  //search
  const [inputText, setInputText] = useState("");

  //filter
  const [filterArray, setFilterArray] = useState([]);

  //sort
  const [sortedGames, setSortedGames] = useState([]);

  return (
    <div id="main">
      <Header />

      <Searchbar setText={setInputText} />
      <FilterBy setFilterArray={setFilterArray} />
      <SortBy setSortedGames={setSortedGames} />

      <GameRendering
        searchText={inputText}
        filterArray={filterArray}
        sortedGames={sortedGames}
      />
      <Footer />
    </div>
  );
}

export default Home;
