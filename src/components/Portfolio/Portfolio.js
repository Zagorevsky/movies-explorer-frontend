import React from "react";
import './Portfolio.css';

function Portfolio() {
  return (
    <portfolio className="portfolio">
      <div className="portfolio__container">
        <p className="portfolio__title">Портфолио</p>
        <nav className="portfolio__block">
          <ul className="portfolio__menu">
            <li><a className="portfolio__menu-link" href="/"><div className="portfolio__menu-block">Статичный сайт</div></a></li>
            <li><a className="portfolio__menu-link" href="/"><div className="portfolio__menu-block">Адаптивный сайт</div></a></li>
            <li><a className="portfolio__menu-link" href="/"><div className="portfolio__menu-block">Одностраничное приложение</div></a></li>
          </ul>
        </nav>
      </div>
    </portfolio>
  );

};

export default Portfolio;
