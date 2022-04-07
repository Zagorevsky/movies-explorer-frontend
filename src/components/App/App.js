import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
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

  const [movies, setMovies] = useState([]);
  const [moviesUser, setMoviesUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [isSending, setIsSending] = useState('');
  const [messageError, setMessageError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    handleLoginCheck(location.pathname);
  }, [])

  useEffect(() => {
    setMessageError('');
    setIsSending('');
  }, [navigate])

  const getUserMovies = () => {
    auth
      .getUserMovies()
      .then(moviesUser => {
        setMoviesUser(moviesUser);
        localStorage.setItem('moviesUser', JSON.stringify(moviesUser));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleLoginCheck = (path) => {
    auth
      .checkAuth(localStorage.getItem('token'))
      .then(res => {
        if (res.email) {
          setCurrentUser({ name: res.name, email: res.email });
          setLoggedIn(true);
          getUserMovies();
          navigate(path);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleLogout = (e) => {
    e.preventDefault();
    auth
      .logOut()
      .then(res => {
        localStorage.clear();
        setCurrentUser({ name: '', email: '' });
        setLoggedIn(false);
        setIsSending('');
        setMessageError('');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleRegisterUser = (user) => {
    auth
      .register(user)
      .then(res => {
        if (res.email) {
          handleAuthUser({email: user.email, password: user.password});
        }
      })
      .catch(err => {
        if (err === 'Ошибка: 409') {
          setMessageError("Пользователь с таким email или name уже существует.");
        } else {
          setMessageError("При регистрации пользователя произошла ошибка.");
        }
      });
  }

  const handleAuthUser = (user) => {
    auth
      .authorize(user)
      .then(res => {
        if (res.data._id) {
          setCurrentUser({ name: res.data.name, email: res.data.email });
          setLoggedIn(true);
          getUserMovies();
          navigate('/movies');
        }
      })
      .catch(
        (err) => {
          console.log(err);
          if (err === 'Ошибка: 401') {
            setMessageError("Вы ввели неправильный логин или пароль.");
          } else {
            setMessageError("При авторизации пользователя произошла ошибка.");
          }
        });
  }

  const handleUpdateUser = (profile) => {
    setIsSending('');
    auth
      .updateProfile(profile.name, profile.email)
      .then((newProfile) => {
        setIsSending('Профиль был успешно обнавлен');
        setMessageError('')
        setLoggedIn(true);
        setCurrentUser({
          name: newProfile.name,
          email: newProfile.email,
        })
      })
      .catch(() => {
        setMessageError('При обновлении профиля произошла ошибка.');
      })
  }

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className="page">
        <div className="page__container">
          <Routes>
            <Route path="/movies" element={
              <ProtectedRoute loggedIn={ loggedIn }>
                <Movies
                  loggedIn={ loggedIn }
                />
              </ProtectedRoute> } />
            <Route path="/saved-movies" element={
              <ProtectedRoute loggedIn={ loggedIn }>
                <SavedMovies
                  loggedIn={ loggedIn }
                />
              </ProtectedRoute> } />
            <Route path="/profile" element={
              <ProtectedRoute loggedIn={ loggedIn }>
                <Profile
                  onUpdateUser={ handleUpdateUser }
                  logOut={ handleLogout }
                  messageError={ messageError }
                  loggedIn={ loggedIn }
                  isSending={ isSending }
                />
              </ProtectedRoute> } />
            <Route path="/signup" element={ loggedIn ? <Navigate to='/movies' /> :
              <Register
                onRegisterUser={ handleRegisterUser }
                messageError={ messageError }
                isReqSending={ isSending }
              /> } />
            { }
            <Route path="/signin" element={ loggedIn ? <Navigate to="/movies" /> :
              <Login
                loggedIn={ loggedIn }
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
