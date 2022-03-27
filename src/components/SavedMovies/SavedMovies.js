import React from "react";
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header"
import movis1 from "../../images/movie-1.svg"
import movis2 from "../../images/movie-2.svg"
import movis3 from "../../images/movie-3.svg"

function SavedMovies({ loggedIn }) {
  return (
    <div className="saved-movies">
      <div className="saved-movies__container"></div>
      <Header loggedIn={ loggedIn }/>
      <SearchForm />
      <div className="saved-movies__list">
        <MoviesCard title="33 слова о дизайне" duration="1ч50" link={ movis1 } isSaved="true" />
        <MoviesCard title="Киноальманах «100 лет дизайна»" duration="1ч50" link={ movis2 } isSaved="true" />
        <MoviesCard title="В погоне за Бенкси" duration="1ч50" link={ movis3 } isSaved="true" />
      </div>
      <button className="saved-movies__button" type="submit" >Ещё</button>
      <Footer />
    </div>
  );

};

export default SavedMovies;
