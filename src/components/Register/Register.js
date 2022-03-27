import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Logo from '../Logo/Logo';
import { useFormAndValidation } from '../../hooks/useFormAndValidation'

export default function Register({ onRegisterUser }) {

  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterUser(values);
    resetForm();
  }

  return (
    <div className="register">
      <div className="register__container">
        <Logo />
        <p className="register__title">Добро пожаловать!</p>
        <form onSubmit={ handleSubmit } className="register__form" name="register">
          <div className="register__block-input">
            <p className="register__input-title">Имя</p>
            <input className={ values.name ? `register__input ${ errors.name ? "register__input_error" : "register__input_valid"}` : "register__input" } required id="name" name="name"
              type="text" defaultValue={ values.name } onChange={ handleChange } minLength="2" maxLength="30"  />
            <span id="email-error" className="register__error" >{ errors.name }</span>
          </div>
          <div className="register__block-input">
            <p className="register__input-title">E-mail</p>
            <input className={ values.email ? `register__input ${ errors.email ? "register__input_error" : "register__input_valid"}` : "register__input" }
               required id="email" name="email"
              type="email" defaultValue={ values.email } onChange={ handleChange } />
            <span id="email-error" className="register__error">{ errors.email }</span>
          </div>
          <div className="register__block-input">
            <p className="register__input-title">Пароль</p>
            <input className={ values.password ? `register__input ${ errors.password ? "register__input_error" : "register__input_valid"}` : "register__input" }
            required id="password" name="password"
              placeholder="" type="password" defaultValue={ values.password } onChange={ handleChange } minLength="8"/>
            <span id="password-error" className="register__error" >{ errors.password }</span>
          </div>
          <div className="register__button-container">
            <button type="submit" className={ `register__button ${!isValid ?
              "register__button_disabled" : ""}` } disabled={ !isValid } >Зарегистрироваться</button>
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
