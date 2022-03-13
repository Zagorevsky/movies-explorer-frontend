import React from "react";
import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__menu">
        <li><Link className="nav-tab__link" to="/">О проекте</Link></li>
        <li><Link className="nav-tab__link" to="/">Технологии</Link></li>
        <li><Link className="nav-tab__link" to="/">Студент</Link></li>
      </ul>
    </nav>
  );

};

export default NavTab;