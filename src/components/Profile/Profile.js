import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ onUpdateUser, logOut }) {

  const currentUser = React.useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values);
    resetForm();
  }

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, []);

  return (
    <div className="profile">
      <div className="profile__container">
        <Header />
        <p className="profile__title">Привет, Виталий!</p>
        <form className="profile__form" onSubmit={ handleSubmit } name="profile">
          <div className="profile__block-input">
            <p className="profile__input-title">Имя</p>
            <input className={ values.name ? `profile__input ${ errors.name ? "profile__input_error" : ""}` : "profile__input" } required id="name" name="name"
              type="text" defaultValue={ values.name } onChange={ handleChange } minLength="2" maxLength="30"  />
            <span id="email-error" className="profile__error" >{ errors.name }</span>
          </div>
          <div className="profile__block-input profile__input_not-line">
            <p className="profile__input-title ">E-mail</p>
            <input className={ values.email ? `profile__input ${ errors.email ? "profile__input_error" : ""}` : "profile__input" }
               required id="email" name="email"
              type="email" defaultValue={ values.email } onChange={ handleChange } />
            <span id="email-error" className="profile__error">{ errors.email }</span>
          </div>
          <div className="profile__button-container">
            <button type="submit" className={ `profile__button ${!isValid ?
              "profile__button_disabled" : ""}` } disabled={ !isValid }>Редактировать</button>
          </div>
        </form>
        <div className="profile__menu">
          <Link to="/signup" onClick={ logOut } className="profile__menu-link">Выйти из аккаунта</Link>
        </div>
      </div>
    </div>
  );

};

export default Profile;
