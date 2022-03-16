import React from "react";
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navigation__container">
        <ul className="navigation__block-txt">
          <li><Link className="navigation__link" to="/movies">Фильмы</Link></li>
          <li><Link className="navigation__link navigation__link_aktiv" to="/saved-movies">Сохранённые фильмы</Link></li>
        </ul>
        <Link className="navigation__link-button" to="/profile"><div className="navigation__link-button-img"></div></Link>
      </nav>
    </div>
  );

};

export default Navigation;
