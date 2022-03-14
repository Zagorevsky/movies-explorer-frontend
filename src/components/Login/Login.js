import React from "react";
import { Link } from 'react-router-dom';
import './Login.css';
import Logo from '../Logo/Logo';

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <Logo />
        <p className="login__title">Рады видеть!</p>
        <form className="login__form" name="login">
          <div className="login__block-input">
            <p className="login__input-title">E-mail</p>
            <input className="login__input" required id="email" name="email"
              placeholder="pochta@yandex.ru" type="email" />
            <span id="email-error" className="login__error"></span>
          </div>
          <div className="login__block-input">
            <p className="login__input-title">Пароль</p>
            <input className="login__input" required id="password" name="password"
              placeholder="" type="password" />
            <span id="password-error" className="login__error "></span>
          </div>
          <div className="login__button-container">
            <button type="submit" className="login__button">Войти</button>
          </div>
        </form>
        <div className="login__menu">
          <p className="login__menu-txt">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="login__menu-link">Регистрация</Link>
        </div>
      </div>
    </div>
  );

};

export default Login;
