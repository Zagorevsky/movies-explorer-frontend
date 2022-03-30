import React, { useState } from "react";
import './FilterCheckbox.css';

function FilterCheckbox(props) {

  return (
    <section className="filter-checkbox">
      <label className="filter-checkbox__container">
        Короткометражки
        <input className="filter-checkbox__checkbox" type="checkbox" name="short-movies"
          onChange={ props.onShortMovies }
        />
        <span className="filter-checkbox__checkmark"></span>
      </label>
    </section>
  );

};

export default FilterCheckbox;
