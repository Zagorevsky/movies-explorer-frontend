import React from "react";
import './Promo.css';
import Logo from '../Logo/Logo';
import NavReg from '../NavReg/NavReg';
// import Navigation from '../Navigation/Navigation'

function Promo() {
  return (
    <div className="promo">
      <div className="promo__container">
        <div className="promo__top" >
          <Logo />
          <NavReg />
        </div>
        <div className="promo__title">Учебный проект студента факультета Веб-разработки.</div>
        <div className="promo__img" />
      </div>
    </div>
  );

};

export default Promo;
