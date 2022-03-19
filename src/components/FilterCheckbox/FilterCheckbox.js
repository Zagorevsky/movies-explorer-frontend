import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
        <div className="filter-checkbox__button "/>
        <input className="filter-checkbox__container" type="checkbox" />
        <p className="filter-checkbox__txt">Короткометражки</p>
    </div>
  );

};

export default FilterCheckbox;
