import React from "react";
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <div className="profile">
      <div className="profile__container">
        <Header />
        <p className="profile__title">Привет, Виталий!</p>
        <form className="profile__form" name="profile">
          <div className="profile__block-input">
            <p className="profile__input-title">Имя</p>
            <input className="profile__input" required id="name" name="name"
              placeholder="Виталий" type="name" />
            <span id="name-error" className="profile__error profile__error_aktiv">
              Что-то пошло нет так</span>
          </div>
          <div className="profile__block-input profile__input_not-line">
            <p className="profile__input-title ">E-mail</p>
            <input className="profile__input " required id="email" name="email"
              placeholder="pochta@yandex.ru" type="email" />
            <span id="name-error" className="profile__error profile__error_aktiv">
              Что-то пошло нет так</span>
          </div>
          <div className="profile__button-container">
            <button type="submit" className="profile__button">Редактировать</button>
          </div>
        </form>
        <div className="profile__menu">
          <Link to="/signup" className="profile__menu-link">Выйти из аккаунта</Link>
        </div>
      </div>
    </div>
  );

};

export default Profile;