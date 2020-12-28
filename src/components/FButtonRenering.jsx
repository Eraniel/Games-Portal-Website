import React from "react";
import FilterButton from "./FilterButton.jsx";

function FButtonRendering(props) {
  const features = [
    { title: "PS 5", name: "Platforms", value: "Playstation 5" },
    { title: "Xbox", name: "Platforms", value: "Xbox Series X/S" },
    { title: "PS5 Upgrade", name: "Ps5Upgrade", value: "true" },
    { title: "Ps5CrossPlay", name: "Ps5CrossPlay", value: "true" },
    { title: "Ps5VR", name: "Ps5VR", value: "true" },
    { title: "XbCrossPlay", name: "XbCrossPlay", value: "true" },
    { title: "XbPlayAnywhere", name: "XbPlayAnywhere", value: "true" },
    { title: "XbSmartDelivery", name: "XbSmartDelivery", value: "true" },
    { title: "XbUpgrade", name: "XbUpgrade", value: "true" },
    { title: "XbOptimized", name: "XbOptimized", value: "true" }
  ];
  const genres = [
    { title: "Action", name: "Genre", value: "Action" },
    { title: "Action-adventure", name: "Genre", value: "Action-adventure" },
    {
      title: "Action role-playing",
      name: "Genre",
      value: "Action role-playing"
    },
    { title: "Adventure", name: "Genre", value: "Adventure" },
    { title: "Stealth", name: "Genre", value: "Stealth" },
    { title: "Battle royale", name: "Genre", value: "Battle royale" },
    { title: "Beat 'em up", name: "Genre", value: "Beat 'em up" },
    { title: "3D platformer", name: "Genre", value: "3D platformer" },
    { title: "Exploration", name: "Genre", value: "Exploration" },
    { title: "Role-playing", name: "Genre", value: "Role-playing" },
    { title: "Family", name: "Genre", value: "Family" },
    {
      title: "First-person shooter",
      name: "Genre",
      value: "First-person shooter"
    },
    { title: "Fighting", name: "Genre", value: "Fighting" },
    {
      title: "Japanese role-playing",
      name: "Genre",
      value: "Japanese role-playing"
    },
    { title: "Puzzle-platformer", name: "Genre", value: "Puzzle-platformer" },
    { title: "Puzzle", name: "Genre", value: "Puzzle" },
    { title: "Party", name: "Genre", value: "Party" },
    { title: "Platform", name: "Genre", value: "Platform" },
    { title: "Hack and slash", name: "Genre", value: "Hack and slash" },
    { title: "Space combat", name: "Genre", value: "Space combat" },
    { title: "Simulation", name: "Genre", value: "Simulation" },
    { title: "Music", name: "Genre", value: "Music" },
    {
      title: "Third-person shooter",
      name: "Genre",
      value: "Third-person shooter"
    },
    { title: "Shooter", name: "Genre", value: "Shooter" },
    { title: "Shoot 'em up", name: "Genre", value: "Shoot 'em up" },
    {
      title: "Psychological Horror",
      name: "Genre",
      value: "Psychological Horror"
    },
    { title: "Survival Horror", name: "Genre", value: "Survival horror" },
    { title: "Vehicular combat", name: "Genre", value: "Vehicular combat" },
    { title: "Racing", name: "Genre", value: "Racing" },
    { title: "MMORPG", name: "Genre", value: "MMORPG" },
    { title: "Sandbox", name: "Genre", value: "Sandbox" },
    { title: "Sports", name: "Genre", value: "Sports" },
    { title: "Survival", name: "Genre", value: "Survival" }
  ];
  function createButtons(button, index) {
    return (
      <FilterButton
        key={index}
        index={index}
        title={button.title}
        name={button.name}
        value={button.value}
        addFilter={props.addFilter}
        removeFilter={props.removeFilter}
      />
    );
  }
  return (
    <div>
      <div className="sidenav-divs">
        <h2 className="sidenav-h2">Filter by features</h2>
        {features.map((button, index) => createButtons(button, index))}
      </div>

      <div className="sidenav-divs">
        <h2 className="sidenav-h2">Filter by genres</h2>
        {genres.map((button, index) => createButtons(button, index))}
      </div>
    </div>
  );
}

export default FButtonRendering;
