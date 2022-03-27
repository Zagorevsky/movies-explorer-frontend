import React, {useEffect} from "react";
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavMob from '../NavMob/NavMob';
import NavReg from "../NavReg/NavReg";


function Header({ loggedIn }) {

  useEffect(() => {
  }, [loggedIn])

  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        { loggedIn ? <Navigation /> : <NavReg />}
        <NavMob />
      </div>
    </header>
  );

};

export default Header;
