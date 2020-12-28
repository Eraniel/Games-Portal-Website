import React, { useState } from "react";

function FilterButton(props) {
  const [toggle, setToggle] = useState(false);

  const buttonStyle = {
    backgroundColor: "whitesmoke",
    color: "black"
  };

  let onButtonClick = (event) => {
    event.persist();
    if (toggle === true) {
      props.removeFilter(event);
    } else {
      props.addFilter(event);
    }
    setToggle((toggle) => !toggle);
  };

  return (
    <div style={{ display: "inline" }}>
      <button
        className="filter-button"
        style={toggle ? buttonStyle : null}
        name={props.name}
        value={props.value}
        onClick={onButtonClick}
      >
        {props.title}
      </button>
    </div>
  );
}

export default FilterButton;
