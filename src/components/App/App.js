import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as auth from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';

function App() {

  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [isSending, setIsSending] = useState(false);

  const [movies, setMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);
  const [messageError, setMessageError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [shortMovies, setShortMovies] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    setLoggedIn(true);
  }

  const handleShortMovies = () => {
    setShortMovies(!shortMovies);
  }

  useEffect(() => {
    handleLoginCheck(location.pathname)
  }, [])

  const handleLoginCheck = (path) => {
    auth
      .checkAuth()
      .then(res => {
        if (res.email) {
          setCurrentUser({ name: res.name, email: res.email });
          handleLogin();
          navigate(path);
        }
      })
      .catch((err) => {
        if (err === 401) {
          setMessageError("Пользователь с таким email не найден");
        }
        if (err === 400) {
          setMessageError("Неверный email или пароль");
        } else {
          setMessageError("При авторизации произошла ошибка");
        }
      })
  }

  const handleLogout = (event) => {
    event.preventDefault();
    setCurrentUser({ name: '', email: '' });
    setLoggedIn(false);
    navigate('/signin');
  }

  useEffect(() => {
    getAllmovies();
  }, [searchQuery])

  const getAllmovies = () => {
    setIsSending(true);
    moviesApi
      .getInitialMovies()
      .then((allMovies) => {
        setMovies(allMovies);
        localStorage.setItem("movies", JSON.stringify(allMovies));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        localStorage.removeItem("movies");
      })
      .finally(() => setIsSending(false));
  }

  useEffect(() => {
    setMessageError("");
    const key = new RegExp(searchQuery, "gi");
    console.log(key);
    const findedMovies = movies.filter(
      (item) => key.test(item.nameRU) || key.test(item.nameEN)
    );
    if (findedMovies.length === 0) {
      setMessageError("Ничего не найдено");
    } else {
      setMessageError("");
      const checkedLikes = findedMovies.map((movie) => {
        movie.isSaved = userMovies.some(
          (userMovie) => userMovie.movieId === movie.id
        );
        return movie;
      });
      setSortedMovies(checkedLikes);
      localStorage.setItem("sortedMovies", JSON.stringify(checkedLikes));
    }
  }, [movies])


  // регистрация нового пользователя
  const handleRegisterUser = (user) => {
    setIsSending(true);
    auth
      .register(user.name, user.email, user.password)
      .then(res => {
        if (res.email) {
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch(err => {
        if (err === 409) {
          setMessageError("Пользователь с таким email уже существует");
        } else {
          setMessageError("При регистрации пользователя произошла ошибка");
        }
      })
      .finally(() => setIsSending(false));
  }

  // авторизация пользователя
  const handleAuthUser = (user) => {
    setIsSending(true);
    auth
      .authorize(user.email, user.password)
      .then(res => {
        if (res.data._id) {
          setCurrentUser({ name: res.name, email: res.email });
          handleLogin();
          navigate('/movies');
        }
      })
      .catch(
        (err) => {
          console.log(`Ошибка: ${err}`);
          if (err.status === 409) {
            setMessageError("Пользователь с таким email уже существует");
          } else {
            setMessageError("При изменении данных профиля произошла ошибка");
          }
        })
      .finally(() => setIsSending(false));
  }

  const handleUpdateUser = (profile) => {
    setIsSending(true);
    auth
      .updateProfile(profile)
      .then((newProfile) => {
        setCurrentUser({
          name: newProfile.name,
          email: newProfile.email,
        })
      })
      .catch((err) => { console.log(err) })
      .finally(() => setIsSending(false));
  }

  const chekLikedMovies = () => {}

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className="page">
        <div className="page__container">
          <Routes>
            <Route path="/movies" element={
              <ProtectedRoute loggedIn={ loggedIn }>
                <Movies
                  movies={ movies }
                  onShortMovies={ handleShortMovies }
                  onSearchQuery={ setSearchQuery }
                  loggedIn={ loggedIn }
                  messageError={ messageError }
                  likedMovies={chekLikedMovies}
                  />
              </ProtectedRoute> } />
            <Route path="/saved-movies" element={
              <ProtectedRoute loggedIn={ loggedIn }>
                <SavedMovies
                  onShortMovies={ handleShortMovies }
                  loggedIn={ loggedIn }
                />
              </ProtectedRoute> } />
            <Route path="/profile" element={
              <ProtectedRoute loggedIn={ loggedIn }>
                <Profile
                  onUpdateUser={ handleUpdateUser }
                  logOut={ handleLogout }
                  messageError={ messageError }
                />
              </ProtectedRoute> } />
            <Route path="/signup" element={
              <Register
                onRegisterUser={ handleRegisterUser }
                messageError={ messageError }
                isReqSending={ isSending }
              /> } />
            <Route path="/signin" element={
              <Login
                onAuthUser={ handleAuthUser }
                messageError={ messageError }
              /> } />
            <Route exact path="/" element={
              <Main
                loggedIn={ loggedIn } /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
