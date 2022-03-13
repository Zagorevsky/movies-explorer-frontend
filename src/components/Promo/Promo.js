import React from "react";
import { Link } from 'react-router-dom';
import './Promo.css';
import Logo from '../Logo/Logo';

function Promo() {
  return (
    <div className="promo">
      <div className="promo__container">
        <div className="promo__top" >
          <Logo />
          <ul className="promo__block-auth">
            <li><Link className="promo__link" to="/signup">Регистрация</Link></li>
            <li><Link className="promo__button" to="/signin">Войти</Link></li>
          </ul>
        </div>
        <div className="promo__title">Учебный проект студента факультета Веб-разработки.</div>
        <div className="promo__img" />
      </div>
    </div>
  );

};

export default Promo;
