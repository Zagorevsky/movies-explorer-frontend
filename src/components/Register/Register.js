import { Link } from 'react-router-dom';
import './Register.css';
import Logo from '../Logo/Logo';
import { useFormAndValidation } from '../../hooks/useFormAndValidation'

function Register({ onRegisterUser }) {

  const { values, handleChange, errors, isValid, setValues, resetForm } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterUser(setValues);
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
            <input className="register__input" required id="name" name="name"
              type="text" defaultValue={ values.name } onChange={ handleChange } />
            <span id="email-error" className="register__error" >{ errors.name }</span>
          </div>
          <div className="register__block-input">
            <p className="register__input-title">E-mail</p>
            <input className="register__input register__input_aktiv" required id="email" name="email"
              type="email" defaultValue={ values.email } onChange={ handleChange } />
            <span id="email-error" className="register__error">{ errors.email }</span>
          </div>
          <div className="register__block-input">
            <p className="register__input-title">Пароль</p>
            <input className="register__input register__input_error" required id="password" name="password"
              placeholder="" type="password" defaultValue={ values.password } onChange={ handleChange } />
            <span id="password-error" className="register__error register__error_aktiv">{ errors.password }</span>
          </div>
          <div className="register__button-container">
            <button type="submit" className={ `register__button ${!isValid ?
              "register__button_disabled" : ""}` } onSubmit={ handleSubmit }
              disabled={ !isValid } >Зарегистрироваться</button>
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
