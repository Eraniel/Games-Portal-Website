import React, { useState, useEffect } from "react";
import gamesList from "../list";

function SortBy(props) {
  const [sortingType, setSortingType] = useState("LastUpdate");
  useEffect(() => {
    function datasort(type) {
      const types = {
        Title: "Title",
        LastUpdate: "LastUpdate",
        PalRelease: "PalRelease"
      };

      const sortProperty = types[type];

      const sortedGamesList = [...gamesList].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      props.setSortedGames(sortedGamesList);
    }

    datasort(sortingType);
  }, [sortingType]);

  return (
    <div className="component-div">
      <h2 className="component-h2">Sort by </h2>
      <select
        className="select-css"
        onClick={(event) => setSortingType(event.target.value)}
      >
        <option value="LastUpdate">Last Update</option>
        <option value="Title"> Name </option>
        <option value="PalRelease">Release</option>
      </select>
    </div>
  );
}

export default SortBy;
