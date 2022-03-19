import React from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
// import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import MoviesCard from "../MoviesCard/MoviesCard";
// import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header"

function Movies() {
  return (
    <div className="movies">
      <Header />
      <SearchForm />
      {/* <FilterCheckbox /> */}
      {/* <SearchForm />
      <Preloader />
      <MoviesCardList />
      <MoviesCard /> */}
    </div>
  );

};

export default Movies;
