import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import * as auth from '../../utils/MainApi';

function SavedMovies(props) {

  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [short, setShort] = useState(false);
  const [moviesMessage, setMoviesMessage] = useState("");

  const updateMovies = (movies) => {
    setMovies(movies);
    localStorage.setItem('moviesUser', JSON.stringify(movies));
  };

  const updateFilteredMovies = (movies) => {
    setFilteredMovies(movies);
    localStorage.setItem('filteredMoviesUser', JSON.stringify(movies));
  };

  const updateQuery = (query) => {
    setQuery(query);
    localStorage.setItem('queryUser', query);
  };

  const updateShort = (short) => {
    setShort(short);
    localStorage.setItem('shortUser', JSON.stringify(short));
  };

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('moviesUser') || '[]');
    updateMovies(movies);
    updateFilteredMovies(JSON.parse(localStorage.getItem('filteredMoviesUser') || '[]'));
    updateQuery(localStorage.getItem('queryUser') || '');
    updateShort(JSON.parse(localStorage.getItem('shortUser') || 'false'));

    if (!movies.length) {
      auth
        .getUserMovies()
        .then(movies => {
          updateMovies(movies);
          updateFilteredMovies(movies);
        })
        .catch((err) => {
          console.log(err);
          setMoviesMessage("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
        });
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
    <div className="saved-movies">
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
        isSavedMovies ={ true }
      />
      <Footer />
    </div>
  );

};

export default SavedMovies;
