import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__txt">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__block">
        <p className="footer__copyright">&copy; 2020</p>
        <nav>
          <ul className="footer-menu">
            <li><a className="footer-menu__link" href="/">Яндекс.Практикум</a></li>
            <li><a className="footer-menu__link" href="https://github.com">Github</a></li>
            <li><a className="footer-menu__link" href="https://www.facebook.com">Facebook</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );

};

export default Footer;
