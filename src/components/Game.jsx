import React, { useState } from "react";
import { Link } from "react-router-dom";

function Game(props) {
  const img = "https://picsum.photos/220/260";
  const [hoverInfo, setHoverInfo] = useState(true);

  return (
    <div>
      <div className="game-img">
        {hoverInfo ? (
          <div onMouseEnter={() => setHoverInfo(false)}>
            <img src={img} alt="somegamesimg" />
          </div>
        ) : (
          <div className="game-info" onMouseLeave={() => setHoverInfo(true)}>
            <h1>
              <Link to={props.title}>{props.title}</Link>
            </h1>
            <p>{props.genre}</p>
            <p>{props.developers}</p>
            <h2>{props.platforms}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
