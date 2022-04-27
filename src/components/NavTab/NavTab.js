import React from "react";
import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__menu">
        <li><a className="nav-tab__link" target="_blank" rel="noreferrer" href="https://kino-exp.students.nomoredomains.xyz/#about-project">О проекте</a></li>
        <li><a className="nav-tab__link" target="_blank" rel="noreferrer" href="https://kino-exp.students.nomoredomains.xyz/#techs">Технологии</a></li>
        <li><a className="nav-tab__link" target="_blank" rel="noreferrer" href="https://kino-exp.students.nomoredomains.xyz/#about-me">Студент</a></li>
      </ul>
    </nav>
  );

};

export default NavTab;