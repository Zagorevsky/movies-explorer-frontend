import React from "react";
import './Promo.css';

function Promo() {
  return (
    <div className="promo">
      <div className="promo__container">
        <div className="promo__top" >
          <div className="promo__logo" />
          <ul className="promo__block-auth">
            <li><a className="promo__link" href="/signup">Регистрация</a></li>
            <li><a className="promo__button" href="/signin">Войти</a></li>
          </ul>
        </div>
        <div className="promo__title">Учебный проект студента факультета Веб-разработки.</div>
        <div className="promo__img" />
      </div>
    </div>
  );

};

export default Promo;
