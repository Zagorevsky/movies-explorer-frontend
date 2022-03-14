import React from "react";
import { Link } from 'react-router-dom';
import './Register.css';
import Logo from '../Logo/Logo';

function Register() {
  return (
    <div className="register">
      <div className="register__container">
        <Logo />
        <p className="register__title">Добро пожаловать!</p>
        <form className="register__form" name="register">
          <div className="register__block-input">
            <p className="register__input-title">Имя</p>
            <input className="register__input" required id="name" name="name"
              placeholder="Виталий" type="text" />
            <span id="email-error" className="register__error"></span>
          </div>
          <div className="register__block-input">
            <p className="register__input-title">E-mail</p>
            <input className="register__input register__input_aktiv" required id="email" name="email"
              placeholder="pochta@yandex.ru" type="email" />
            <span id="email-error" className="register__error"></span>
          </div>
          <div className="register__block-input">
            <p className="register__input-title">Пароль</p>
            <input className="register__input register__input_error" required id="password" name="password"
              placeholder="••••••••••••••" type="password" />
            <span id="password-error" className="register__error register__error_aktiv">Что-то пошло не так...</span>
          </div>
          <div className="register__button-container">
            <button type="submit" className="register__button">Зарегистрироваться</button>
          </div>
        </form>
        <div className="register__menu">
          <p className="register__menu-txt">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__menu-link">Войти</Link>
        </div>
      </div>
    </div>
  );

};

export default Register;
