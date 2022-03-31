import React from "react";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

  return (
    <section className="search-form">
      <form onSubmit={ props.onSubmit } className="search-form__container">
        <div className="search-form__block">
          <input className="search-form__input" placeholder="Фильм"
            value={ props.query }
            onChange={e => props.updateQuery(e.target.value)}
            name="searchQuery"
            id="searchQuery"
            type="text"
            maxLength="40"
            />
          <span id="search-form-error" className="search-form__error ">{}</span>
          <div className="search-form__button-container">
            <button type="submit" className="search-form__button" />
          </div>
        </div>
        <FilterCheckbox className="search-form__filter-checkbox"
          onShortMovies={ props.onShortMovies }
          short={props.short}
          updateShort={props.updateShort}
        />
      </form>
    </section>
  );

};

export default SearchForm;
