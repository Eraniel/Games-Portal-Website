import React from "react";

function Searchbar(props) {
  //value отправляется в App
  function handleChange(event) {
    let text = event.target.value;
    props.setText(text.replace(/\s/g, ""));
  }

  return (
    <div className="component-div">
      <form spellCheck="false">
        <input
          onChange={handleChange}
          type="text"
          value={props.inputText}
          placeholder="Search by name..."
        />
      </form>
    </div>
  );
}

export default Searchbar;
