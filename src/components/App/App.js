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

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [isSending, setIsSending] = useState(false);

  const [messageError, setMessageError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    handleLoginCheck(location.pathname)
  }, [])

  useEffect(() => {
    setMessageError('');
  }, [navigate])

  const handleLoginCheck = (path) => {
    auth
      .checkAuth()
      .then(res => {
        if (res.email) {
          setCurrentUser({ name: res.name, email: res.email });
          setLoggedIn(true);
          navigate(path);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleLogout = (e) => {
    e.preventDefault();
    setCurrentUser({ name: '', email: '' });
    setLoggedIn(false);
    navigate('/signin');
  }


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
        if (err === 'Ошибка: 409') {
          setMessageError("Пользователь с таким email уже существует.");
        } else {
          setMessageError("При регистрации пользователя произошла ошибка.");
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
          setLoggedIn(true);
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
        })
      .finally(() => setIsSending(false));
  }

  const handleUpdateUser = (profile) => {
    setIsSending(true);
    auth
      .updateProfile(profile.name, profile.email)
      .then((newProfile) => {
        setLoggedIn(true);
        setCurrentUser({
          name: newProfile.name,
          email: newProfile.email,
        })
      })
      .catch(() => {
        setMessageError('При обновлении профиля произошла ошибка.');
      })
      .finally(() => setIsSending(false));
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
