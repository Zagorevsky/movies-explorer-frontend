import React from "react";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <nav>
        <ul className="header-menu">
          <li><a className="header-menu__link" href="/">Фильмы</a></li>
          <li><a className="header-menu__link header-menu__link_aktive" href="/">Сохранённые фильмы</a></li>
        </ul>
      </nav>
      <button className="header__button" type="submit">Аккаунт</button>
    </header>
  );

};

export default Header;
