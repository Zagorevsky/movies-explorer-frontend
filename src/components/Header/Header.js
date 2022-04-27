import React, { useEffect, useState } from "react";
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavMob from '../NavMob/NavMob';
import NavReg from "../NavReg/NavReg";


function Header({ loggedIn }) {

  useEffect(() => {}, [loggedIn])

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        { loggedIn ?
          <Navigation setIsOpenMenu={setIsOpenMenu}/> :
          <NavReg /> }
        <NavMob setIsOpenMenu={setIsOpenMenu} isOpen={isOpenMenu}/>
      </div>
    </header>
  );

};

export default Header;
