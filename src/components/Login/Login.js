import { Link } from 'react-router-dom';
import './Login.css';
import Logo from '../Logo/Logo';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function Login({onAuthUser}) {

  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuthUser(values);
    resetForm();
  }

  return (
    <div className="login">
      <div className="login__container">
        <Logo />
        <p className="login__title">Рады видеть!</p>
        <form onSubmit={ handleSubmit } className="login__form" name="login">
          <div className="login__block-input">
            <p className="login__input-title">E-mail</p>
            <input className={ values.email ? `login__input ${ errors.email ? "login__input_error" : "login__input_valid"}` : "login__input" } required id="email" name="email"
              placeholder="pochta@yandex.ru" type="email"
              defaultValue={ values.email } onChange={ handleChange } />
            <span id="email-error" className="login__error">{ errors.email }</span>
          </div>
          <div className="login__block-input">
            <p className="login__input-title">Пароль</p>
            <input className={ values.password ? `login__input ${ errors.password ? "login__input_error" : "login__input_valid"}` : "login__input" } required id="password" name="password"
              placeholder="" type="password" onChange={ handleChange } defaultValue={ values.password } minLength="8" />
            <span id="password-error" className="login__error ">{ errors.password }</span>
          </div>
          <div className="login__button-container">
            <button type="submit" className={ `login__button ${!isValid ?
              "login__button_disabled" : ""}` } >Войти</button>
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
