import React from "react";
import './SavedMovies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function SavedMovies() {
  return (
    <div className="saved-movies">Abkmvs
      <MoviesCardList />
      <MoviesCard />
    </div>
  );

};

export default SavedMovies;
