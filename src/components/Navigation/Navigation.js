import React from "react";
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {

  const screenWidth = window.screen.width;

  return (
    <div className="navigation">
      <nav
        className="navigation__container">
        <ul className="navigation__block-txt">
          <li>
            <Link className="navigation__link"
              to="/movies">
              Фильмы
            </Link>
          </li>
          <li>
            <Link
              className="navigation__link navigation__link_aktiv"
              to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        { screenWidth > 1150 ?
          <Link className="navigation__link-profile" to="/profile" /> :
          <button className="navigation__link-profile"  onClick={ ()=>props.setIsOpenMenu(true) }/> }
      </nav>
    </div>
  );

};

export default Navigation;
