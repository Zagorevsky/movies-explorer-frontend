import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Login.css';
import Logo from '../Logo/Logo';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formValid, setFormValid] = useState(false);

  function handleChangeEmail(e) {
    const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(
      e.target.value
    );

    if (!validEmail) {
      setEmailError("Неверный формат почты");
    } else {
      setEmailError("");
    }
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    if (e.target.value.length < 8) {
      setPasswordError("Пароль должен быть не менее 8 символов");
    } else {
      setPasswordError("");
    }
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    props.onAuthUser({email, password});
  }

  useEffect(() => {
    if (email && password && !emailError && !passwordError) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [email, password, emailError, passwordError]);

  return (
    <section className="login">
      <div className="login__container">
        <Logo />
        <p className="login__title">Рады видеть!</p>
        <form onSubmit={ handleSubmit } className="login__form" name="login">
          <div className="login__block-input">
            <p className="login__input-title">E-mail</p>
            <input className={ email ? `login__input ${ emailError ? "login__input_error" : "login__input_valid"}` : "login__input" } required id="email" name="email"
              placeholder="pochta@yandex.ru" type="email"
              value={ email } onChange={ handleChangeEmail } />
            <span id="email-error" className="login__error">{ emailError }</span>
          </div>
          <div className="login__block-input">
            <p className="login__input-title">Пароль</p>
            <input className={ password ? `login__input ${ passwordError ? "login__input_error" : "login__input_valid"}` : "login__input" } required id="password" name="password"
              placeholder="" type="password" onChange={ handleChangePassword } value={ password } />
            <span id="password-error" className="login__error ">{ passwordError }</span>
          </div>
          <div className="login__button-container">
            <button type="submit" className={ `login__button ${!formValid ?
              "login__button_disabled" : ""}` } >Войти</button>
              <span className="login__form-error" >{ props.messageError }</span>
          </div>
        </form>
        <div className="login__menu">
          <p className="login__menu-txt">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="login__menu-link">Регистрация</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
