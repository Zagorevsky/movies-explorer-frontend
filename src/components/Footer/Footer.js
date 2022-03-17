import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__txt">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__block">
          <p className="footer__copyright">&copy; 2020</p>
            <ul className="footer__menu">
              <li><a className="footer__menu-link" href="/">Яндекс.Практикум</a></li>
              <li><a className="footer__menu-link" href="https://github.com">Github</a></li>
              <li><a className="footer__menu-link" href="https://www.facebook.com">Facebook</a></li>
            </ul>
        </div>
      </div>
    </footer>
  );

};

export default Footer;
