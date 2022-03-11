import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <BrowserRouter>
          <Switch>
            <Route path="/movies" component={ Movies } />
            <Route path="/saved-movies" component={ SavedMovies } />
            <Route path="/profile" component={ Profile } />
            <Route path="/signup" component={ Register } />
            <Route path="/signin" component={ Login } />
            <Route exact path="/" component={ Main } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
