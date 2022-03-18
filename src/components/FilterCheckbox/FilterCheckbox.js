import React from "react";
import { Link } from 'react-router-dom';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <Link className="filter-checkbox__link" to="/" />
    </div>
  );

};

export default FilterCheckbox;
