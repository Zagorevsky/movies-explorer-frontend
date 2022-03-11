import React from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm.js";
import Preloader from "../Preloader/Preloader.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      <Preloader />
      <MoviesCardList />
      <MoviesCard />
    </div>
  );

};

export default Movies;
