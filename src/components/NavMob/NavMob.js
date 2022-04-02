import React from "react";
import { Link } from 'react-router-dom';
import './NavMob.css';

function NavMob(props) {


  return (
    <nav className={ `nav-mob ${props.isOpen ? 'nav-mob_opened' : ''}` }>
      <div className="nav-mob__container">
      <button className="nav-mob__close" type="button" onClick={ () => props.setIsOpenMenu(false) }/>
        <div className="nav-mob__menu">
          <Link className="nav-mob__link" to="/">Главная</Link>
          <Link className="nav-mob__link nav-mob__link_aktiv" to="/movies">Фильмы</Link>
          <Link className="nav-mob__link" to="/saved-movies">Сохранённые фильмы</Link>
          <Link className="nav-mob__link-button" to="/profile">
            <div className="nav-mob__link-button-img" />
          </Link></div>
      </div>
    </nav>
  );

};

export default NavMob;
