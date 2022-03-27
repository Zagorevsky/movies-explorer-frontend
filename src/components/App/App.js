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

function App() {
  // стейт для хранения состояния авторизации
  const [loggedIn, setLoggedIn] = useState(false);
  // стейт для хранения данных пользователя
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  // стейт состояния регистрации
  const [isRegistrationResult, setIsRegistrationResult] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();


  // установка состояния авторизованный пользователь
  const handleLogin = () => {
    setLoggedIn(true);
  }

  // проверка текущей авторизации
  useEffect(() => {
    handleLoginCheck(location.pathname)
  }, [])

  const handleLoginCheck = () => {
    auth
      .checkAuth()
      .then(res => {
        if (res.email) {
          setCurrentUser({name: res.name, email:res.email});
          handleLogin();
          navigate('/movies');
        }
      })
      .catch((err) => { console.log(err); })
  }

  // выход - сброс авторизации
  const handleLogout = (event) => {
    event.preventDefault();
    setCurrentUser({ name: '', email: '' });
    setLoggedIn(false);
    navigate('/signin');
  }

  // регистрация нового пользователя
  const handleRegisterUser = (user) => {
    auth
      .register(user.name, user.email, user.password)
      .then(res => {
        if (res.email) {
          setIsRegistrationResult(true);
          navigate('/movies');
        } else { setIsRegistrationResult(false); }
      })
      .catch(err => {
        setIsRegistrationResult(false);
        console.log(err)
      })
  }

  // авторизация пользователя
  const handleAuthUser = (user) => {
    auth
      .authorize(user.email, user.password)
      .then(res => {
        if (res.data._id) {
          setCurrentUser({name: res.name, email:res.email});
          handleLogin();
          navigate('/movies');
        }
      })
      .catch(
        (err) => {
          console.log(err);
        })
  }

  const handleUpdateUser = (profile) => {
    auth
      .updateProfile(profile)
      .then((newProfile) => {
        setCurrentUser({
          name: newProfile.name,
          email: newProfile.email,
        })
      })
      .catch((err) => { console.log(err) }); // выведем ошибку в консоль
  }

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className="page">
        <div className="page__container">
          <Routes>
            <Route path="/movies" element={ <ProtectedRoute loggedIn={ loggedIn }><Movies loggedIn={ loggedIn }/></ProtectedRoute> } />
            <Route path="/saved-movies" element={ <ProtectedRoute loggedIn={ loggedIn }><SavedMovies loggedIn={ loggedIn }/></ProtectedRoute> } />
            <Route path="/profile" element={ <ProtectedRoute loggedIn={ loggedIn }><Profile onUpdateUser={ handleUpdateUser } logOut={ handleLogout } /></ProtectedRoute> } />
            <Route path="/signup" element={ <Register onRegisterUser={ handleRegisterUser } /> } />
            <Route path="/signin" element={ <Login onAuthUser={ handleAuthUser } /> } />
            <Route exact path="/" element={ <Main loggedIn={ loggedIn }/> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
