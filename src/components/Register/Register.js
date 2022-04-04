import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Logo from '../Logo/Logo';
import { useFormAndValidation } from '../../hooks/useFormAndValidation'

export default function Register(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formValid, setFormValid] = useState(false);

  function handleChangeName(e) {
    const validName = /^[a-zA-Z- ]+$/.test(e.target.value);

    if (e.target.value.length < 2) {
      setNameError("Длина имени должна быть не менее 2 символов");
    } else if (e.target.value.length > 30) {
      setNameError("Длина имени должна должна быть не более 30 символов");
    } else if (!validName) {
      setNameError("Имя должно быть указано латинcкими буквами");
    } else {
      setNameError("");
    }
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(e.target.value);
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
    props.onRegisterUser({ name, email, password });
  }

  useEffect(() => {
    if (name && email && password && !nameError && !emailError && !passwordError) { setFormValid(true); } else { setFormValid(false); }
  }, [name, email, password, nameError, emailError, passwordError]);

  return (
    <section className="register">
      <div className="register__container">
        <Logo />
        <p className="register__title">Добро пожаловать!</p>
        <form onSubmit={ handleSubmit } className="register__form" name="register">
          <div className="register__block-input">
            <p className="register__input-title">Имя</p>
            <input className={ name ? `register__input ${nameError ? "register__input_error" : "register__input_valid"}` : "register__input" } id="name" name="name"
              type="text" value={ name } onChange={ handleChangeName } />
            <span id="email-error" className="register__error" >{ nameError }</span>
          </div>
          <div className="register__block-input">
            <p className="register__input-title">E-mail</p>
            <input className={ email ? `register__input ${emailError ? "register__input_error" : "register__input_valid"}` : "register__input" }
              id="email" name="email"
              type="email" value={ email } onChange={ handleChangeEmail } />
            <span className="register__error">{ emailError }</span>
          </div>
          <div className="register__block-input">
            <p className="register__input-title">Пароль</p>
            <input className={ password ? `register__input ${passwordError ? "register__input_error" : "register__input_valid"}` : "register__input" }
              id="password" name="password"
              placeholder="" type="password" value={ password } onChange={ handleChangePassword } />
            <span className="register__error" >{ passwordError }</span>
          </div>
          <div className="register__button-container">
            <button type="submit" className={ `register__button ${!formValid ?
              "register__button_disabled" : ""}` } disabled={ !formValid } >Зарегистрироваться</button>
            <span className="register__form-error" >{ props.messageError }</span>
          </div>
        </form>
        <div className="register__menu">
          <p className="register__menu-txt">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__menu-link">Войти</Link>
        </div>
      </div>
    </section>
  );
};
