import React from "react";
import { Link } from 'react-router-dom';
import './NavReg.css';

function NavReg() {
  return (
    <nav className="nav-reg">
      <ul className="nav-reg__block-auth">
        <li><Link className="nav-reg__link" to="/signup">Регистрация</Link></li>
        <li><Link className="nav-reg__button" to="/signin">Войти</Link></li>
      </ul>
    </nav>
  );

};

export default NavReg;