import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateUser(values);
    resetForm();
  }

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser.name, currentUser.email]);

  return (
    <section className="profile">
      <div className="profile__container">
        <Header loggedIn={ props.loggedIn } />
        <p className="profile__title">Привет, { currentUser.name }!</p>
        <form className="profile__form" onSubmit={ handleSubmit } name="profile">
          <div className="profile__block-input">
            <p className="profile__input-title">Имя</p>
            <input className={ values.name ? `profile__input ${errors.name ? "profile__input_error" : ""}` : "profile__input" } required id="name" name="name"
              type="text" defaultValue={ values.name } onChange={ handleChange } minLength="2" maxLength="30" />
            <span id="email-error" className="profile__error" >{ errors.name }</span>
          </div>
          <div className="profile__block-input profile__input_not-line">
            <p className="profile__input-title ">E-mail</p>
            <input className={ values.email ? `profile__input ${errors.email ? "profile__input_error" : ""}` : "profile__input" }
              required id="email" name="email"
              type="email" defaultValue={ values.email } onChange={ handleChange } />
            <span id="email-error" className="profile__error">{ errors.email }</span>
          </div>
          <div className="profile__button-container">
            <button type="submit" className={ `profile__button ${!isValid ||
                (Boolean(currentUser.name === values.name) &&
                  Boolean(currentUser.email === values.email)) ?
              "profile__button_disabled" : ""}` } disabled={ !isValid ||
                (Boolean(currentUser.name === values.name) &&
                  Boolean(currentUser.email === values.email)) }>Редактировать</button>
            <span className={ `profile__form-error ${props.isSending ?
              "profile__form-error_no" : ""}` } >{ props.messageError }{ props.isSending }</span>
          </div>
        </form>
        <div className="profile__menu">
          <Link to="/signup" onClick={ props.logOut } className="profile__menu-link">Выйти из аккаунта</Link>
        </div>
      </div>
    </section>
  );

};

export default Profile;
