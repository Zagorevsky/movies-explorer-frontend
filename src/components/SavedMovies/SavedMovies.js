import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import * as auth from '../../utils/MainApi';
import { MAX } from "../../utils/utils";

function SavedMovies(props) {

  const [moviesUser, setMoviesUser] = useState([]);
  const [filteredMoviesUser, setFilteredMoviesUser] = useState([]);
  const [queryUser, setQueryUser] = useState("");
  const [shortUser, setShortUser] = useState(false);
  const [moviesMessage, setMoviesMessage] = useState("");

  const updateMoviesUser = (moviesUser) => {
    setMoviesUser(moviesUser);
    localStorage.setItem('moviesUser', JSON.stringify(moviesUser));
  };

  const updateFilteredMoviesUser = (moviesUser) => {
    setFilteredMoviesUser(moviesUser);
    localStorage.setItem('filteredMoviesUser', JSON.stringify(moviesUser));
  };

  const updateQueryUser = (queryUser) => {
    setQueryUser(queryUser);
    localStorage.setItem('queryUser', queryUser);
  };

  const updateShortUser = (shortUser) => {
    setShortUser(shortUser);
    localStorage.setItem('shortUser', JSON.stringify(shortUser));
  };

  useEffect(() => {
    setMoviesMessage('');
    const moviesUser = JSON.parse(localStorage.getItem('moviesUser') || '[]');
    updateMoviesUser(moviesUser);
    updateFilteredMoviesUser(JSON.parse(localStorage.getItem('filteredMoviesUser') || '[]'));
    updateQueryUser(localStorage.getItem('queryUser') || '');
    updateShortUser(JSON.parse(localStorage.getItem('shortUser') || 'false'));

    auth
      .getUserMovies()
      .then(movies => {
        updateMoviesUser(movies);
        updateFilteredMoviesUser(movies);
      })
      .catch((err) => {
        console.log(err);
        setMoviesMessage("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
      });
  }, []);


  const handleSubmit = (e) => {
    setMoviesMessage("")
    e.preventDefault();
    const key = new RegExp(queryUser, "gi");
    if (queryUser.length) {
      updateFilteredMoviesUser(moviesUser.filter(item => key.test(item.nameRU) ||
        key.test(item.nameEN) || key.test(item.description)));
      if (filteredMoviesUser.length === 0) {
        setMoviesMessage("Ничего не найдено");
      } else {
        setMoviesMessage("");
      }
    } else {
      updateFilteredMoviesUser(moviesUser);
    };
  }

  return (
    <div className="saved-movies">
      <Header loggedIn={ props.loggedIn } />
      <SearchForm
        onShortMovies={ props.onShortMovies }
        query={ queryUser }
        onSubmit={ handleSubmit }
        updateQuery={ updateQueryUser }
        short={ shortUser }
        updateShort={ updateShortUser }
      />
      <MoviesCardList
        movies={ filteredMoviesUser.filter(movie => !shortUser|| movie.duration <= 40) }
        moviesMessage={ moviesMessage }
        short={ shortUser }
        isSavedMovies={ true }
        setMoviesUser={ setMoviesUser }
        setFilteredMoviesUser={ setFilteredMoviesUser }
        counter={ MAX }
      />
      <Footer />
    </div>
  );

};

export default SavedMovies;
