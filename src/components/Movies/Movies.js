import React from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header"
// import Preloader from "../Preloader/Preloader"

function Movies(props) {

  return (
    <div className="movies">
      <Header loggedIn={ props.loggedIn } />
      <SearchForm
        onShortMovies={ props.onShortMovies }
        onSearchQuery={ props.onSearchQuery }
        messageError={ props.messageError }
        likedMovies ={ props.likedMovies }
      />
      <MoviesCardList
        movies={ props.movies }

      />
      <Footer />
    </div>
  );

};

export default Movies;
