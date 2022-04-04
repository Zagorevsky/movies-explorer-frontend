import React, { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import * as moviesApi from '../../utils/MoviesApi';


function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [short, setShort] = useState(false);
  const [moviesMessage, setMoviesMessage] = useState("");

  const updateMovies = (movies) => {
    setMovies(movies);
    localStorage.setItem('movies', JSON.stringify(movies));
  };

  const updateFilteredMovies = (movies) => {
    setFilteredMovies(movies);
    localStorage.setItem('filteredMovies', JSON.stringify(movies));
  };

  const updateQuery = (query) => {
    setQuery(query);
    localStorage.setItem('query', query);
  };

  const updateShort = (short) => {
    setShort(short);
    localStorage.setItem('short', JSON.stringify(short));
  };

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('movies') || '[]');

    updateMovies(movies);
    updateFilteredMovies(JSON.parse(localStorage.getItem('filteredMovies') || '[]'));
    updateQuery(localStorage.getItem('query') || '');
    updateShort(JSON.parse(localStorage.getItem('short') || 'false'));

    if (!movies.length) {
      moviesApi
        .getInitialMovies()
        .then(movies => {
          updateMovies(movies);
          updateFilteredMovies(movies);
        })
        .catch((err) => { console.log(err) });
    }
  }, []);

  const handleSubmit = (e) => {
    setMoviesMessage("")
    e.preventDefault();
    const key = new RegExp(query, "gi");
    if (query.length) {
      updateFilteredMovies(movies.filter(item => key.test(item.nameRU) || key.test(item.nameEN)));
      if (filteredMovies.length === 0) {
        setMoviesMessage("Ничего не найдено");
      } else {
        setMoviesMessage("");
      }
    } else {
      setMoviesMessage("Необходимо ввести запрос!")
    };
  }

  return (
    <div className="movies">
      <Header loggedIn={ props.loggedIn } />
      <SearchForm
        onShortMovies={ props.onShortMovies }
        query={ query }
        onSubmit={ handleSubmit }
        updateQuery={ updateQuery }
        short={ short }
        updateShort={ updateShort }
      />
      <MoviesCardList
        movies={ filteredMovies }
        moviesMessage={ moviesMessage }
        likedMovies={ props.likedMovies }
        short={ short }
        isSavedMovies={ false }
      />
      <Footer />
    </div>
  );

};

export default Movies;
