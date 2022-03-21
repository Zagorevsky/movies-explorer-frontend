import React from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header"

function Movies() {
  return (
    <div className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  );

};

export default Movies;
