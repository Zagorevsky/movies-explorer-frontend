import React from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header"
import Preloader from "../Preloader/Preloader"

function Movies({ loggedIn }) {

  return (
    <div className="movies">
      <Header loggedIn={ loggedIn }/>
      <SearchForm />
      <MoviesCardList />
      <div className="movies__preloader"><Preloader  /></div>
      <Footer />
    </div>
  );

};

export default Movies;
