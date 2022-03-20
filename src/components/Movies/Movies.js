import React from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
// import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
// import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header"

function Movies() {
  return (
    <div className="movies">
      <Header />
      <SearchForm />
      <MoviesCard />
      {/* <FilterCheckbox /> */}
      {/* <SearchForm />
      <Preloader />
      <MoviesCardList />*/}
    </div>
  );

};

export default Movies;
