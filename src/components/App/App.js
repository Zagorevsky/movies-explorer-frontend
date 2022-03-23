import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'


function App() {
  // стейт для хранения состояния авторизации
  const [loggedIn, setLoggedIn] = useState(false);
  // стейт для хранения данных пользователя
  const [currentUser, setCurrentUser] = useState({ avatar: '', name: '', about: '', id: '' });

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className="page">
        <div className="page__container">
          <Router>
            <Switch>
              <ProtectedRoute path="/movies" component={ Movies } loggedIn={ loggedIn } />
              <ProtectedRoute path="/saved-movies" component={ SavedMovies } loggedIn={ loggedIn } />
              <ProtectedRoute path="/profile" component={ Profile } loggedIn={ loggedIn } />
              <Route path="/signup" component={ Register } />
              <Route path="/signin" component={ Login } />
              <Route exact path="/" component={ Main } />
              <Route path="*" component={ NotFound } />
            </Switch>
          </Router>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
