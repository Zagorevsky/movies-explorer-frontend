import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
  const [currentUser, setCurrentUser] = useState({ name: '', id: '' });
  // стейт состояния регистрации
  const [isRegistrationResult, setIsRegistrationResult] = useState(false);

  const navigate = useNavigate();

  const handleRegisterUser = (user) => {
    if (user.password !== '') {
      auth
        .register(user)
        .then(res => {
          if (res.email) {
            setIsRegistrationResult(true);
            navigate('/movies');
          } else { setIsRegistrationResult(false); }

        })
        .catch(err => {
          setIsRegistrationResult(false);
          navigate('/');
          console.log(err)
        })
    }
  }

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className="page">
        <div className="page__container">
          <Routes>
            <Route path="/movies" element={ <ProtectedRoute loggedIn={ loggedIn }><Movies /></ProtectedRoute>} />
            <Route path="/saved-movies" element={ <ProtectedRoute loggedIn={ loggedIn }><SavedMovies /></ProtectedRoute>} />
            <Route path="/profile" element={ <ProtectedRoute loggedIn={ loggedIn }><Profile /></ProtectedRoute>} />
            <Route path="/signup" element={<Register onRegisterUser={ handleRegisterUser } registrationResult={ setIsRegistrationResult } /> }/>
            <Route path="/signin" element={ <Login /> } />
            <Route exact path="/" element={ <Main /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
