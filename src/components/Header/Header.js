import React from "react";
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavMob from '../NavMob/NavMob';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Navigation />
        <NavMob />
      </div>
    </header>
  );

};

export default Header;
