import React from "react";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className="search-form">
      <form className="search-form__container">
        <div className="search-form__block">
          <input className="search-form__input" placeholder="Фильм" required />
          <span id="search-form-error" className="search-form__error "></span>
          <div className="search-form__button-container">
            <button type="submit" className="search-form__button" />
          </div>
        </div>
        <FilterCheckbox className="search-form__filter-checkbox"/>
      </form>
    </div>
  );

};

export default SearchForm;
