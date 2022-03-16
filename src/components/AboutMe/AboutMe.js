import React from "react";
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <ul className="about-me__tab">
          <li className="about-me__block">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__profil">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__info">Я родился и живу в Саратове, закончил факультет экономики СГУ.
              У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
              С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
              начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <nav>
              <ul className="about-me__menu">
                <li><a className="about-me__link" href="https://github.com">Github</a></li>
                <li><a className="about-me__link" href="https://www.facebook.com">Facebook</a></li>
              </ul>
            </nav>
          </li>
          <li className="about-me__block about-me__block_foto">
            <div className="about-me__foto"/>
          </li>
        </ul>
      </div>
    </div>
  );

};

export default AboutMe;
