import React from "react";
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <p className="portfolio__title">Портфолио</p>
        <nav className="portfolio__block">
          <ul className="portfolio__menu">
            <li><a className="portfolio__menu-link" target="_blank" rel="noreferrer" href="https://github.com/Zagorevsky/how-to-learn"><div className="portfolio__menu-block">Статичный сайт</div></a></li>
            <li><a className="portfolio__menu-link" target="_blank" rel="noreferrer" href="https://github.com/Zagorevsky/russian-travel"><div className="portfolio__menu-block">Адаптивный сайт</div></a></li>
            <li><a className="portfolio__menu-link" target="_blank" rel="noreferrer" href="https://github.com/Zagorevsky/react-mesto-api-full"><div className="portfolio__menu-block portfolio__menu-block_no-line">Одностраничное приложение</div></a></li>
          </ul>
        </nav>
      </div>
    </section>
  );

};

export default Portfolio;
