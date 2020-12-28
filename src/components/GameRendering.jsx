import React from "react";
import Game from "./Game.jsx";

function GameRendering(props) {
  function createItem(game, index) {
    return (
      <Game
        key={game.LastUpdate + index}
        index={index}
        title={game.Title}
        genre={game.Genre}
        developers={game.Developers}
        platforms={game.Platforms}
        setContent={props.setContent}
      />
    );
  }
  /////////////////////////////////////////
  //!!

  console.log(props.filterArray);

  function howToCompare(filter, game) {
    if (filter.value === "true") {
      return game[filter.key] === true;
    } else if (typeof filter.value === "string") {
      return game[filter.key]
        .toString()
        .toLowerCase()
        .includes(filter.value.toLowerCase());
    }
  }

  ////////////////////////////////////////////
  return props.filterArray.length !== 0 ? (
    <div>
      {/* {props.sortedGames
        .filter((game) => {
          return props.filterArray.every((filter) =>
            howToCompare(filter, game)
          );
        })
        .map((game, index) => createItem(game, index))} */}
      {props.sortedGames
        .filter((game) => {
          return props.filterArray.some((filter) => howToCompare(filter, game));
        })
        .map((game, index) => createItem(game, index))}
    </div>
  ) : (
    <div>
      {props.sortedGames
        .filter((game) =>
          game.Title.toLowerCase().includes(props.searchText.toLowerCase())
        )
        .map((game, index) => createItem(game, index))}
    </div>
  );
}
export default GameRendering;
