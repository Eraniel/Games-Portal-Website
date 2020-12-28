import React from "react";
import FButtonRendering from "./FButtonRenering.jsx";

function FilterBy(props) {
  function addFilter(event) {
    const { name, value } = event.target;

    props.setFilterArray((prevFilters) => {
      return [...prevFilters, { key: name, value: value }];
    });
  }

  function removeFilter(event) {
    const { name } = event.target;

    props.setFilterArray((prevFilters) => {
      return prevFilters.filter((filter) => {
        return filter.key !== name;
      });
    });
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
  }

  return (
    <div id="mySidenav" className="sidenav">
      <button className="closebtn" onClick={closeNav}>
        <i className="fa fa-chevron-right"></i>
      </button>

      <FButtonRendering addFilter={addFilter} removeFilter={removeFilter} />
    </div>
  );
}
export default FilterBy;

//так с объектом
//   props.setFilter((prevFilters) => {
//     return {
//       ...prevFilters,
//       [name]: value
//     };
//   });
// }
