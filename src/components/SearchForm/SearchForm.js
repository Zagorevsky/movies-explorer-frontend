import React from "react";
import './SearchForm.css';

function SearchForm() {
  return (
    <div className="search-form">
      <form className="search-form__container">
        <input className="search-form__input" placeholder="" />
        <span id="search-form-error" className="search-form__error "></span>
        <div className="search-form__button-container">
          <button type="submit" className="search-form__button">Войти</button>
        </div>
      </form>
    </div>
  );

};

export default SearchForm;
