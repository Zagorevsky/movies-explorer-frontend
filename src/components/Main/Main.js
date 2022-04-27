import React from "react";
import './Main.css';
import Promo from "../Promo/Promo.js";
import NavTab from "../NavTab/NavTab.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import AboutMe from "../AboutMe/AboutMe.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Footer from '../Footer/Footer';
import Header from "../Header/Header";

function Main({ loggedIn }) {
  return (
    <div className="main">
      <div className="main__header"><Header loggedIn={ loggedIn }/></div>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Main;
