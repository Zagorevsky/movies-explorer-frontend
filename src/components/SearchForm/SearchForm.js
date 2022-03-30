import React from "react";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function SearchForm(props) {

  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearchQuery( values.searchQuery);
  }

  return (
    <section className="search-form">
      <form onSubmit={ handleSubmit } className="search-form__container">
        <div className="search-form__block">
          <input className="search-form__input" placeholder="Фильм" required
            onChange={ handleChange }
            defaultValue={ values.searchQuery }
            name="searchQuery"
            id="searchQuery"
            type="text"
            minLength="2"
            maxLength="40"
            />
          <span id="search-form-error" className="search-form__error ">{errors.searchQuery}</span>
          <div className="search-form__button-container">
            <button type="submit" className="search-form__button" />
          </div>
        </div>
        <FilterCheckbox className="search-form__filter-checkbox"
          onShortMovies={ props.onShortMovies }
        />
      </form>
    </section>
  );

};

export default SearchForm;
