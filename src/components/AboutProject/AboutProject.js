import React from "react";
import './AboutProject.css';

function AboutProject() {
  return (
    <div id="about-project" className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <ul className="about-project__text">
          <li className="about-project__block">
            <h3 className="about-project__title-block">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__info">Составление плана, работу над бэкендом,
              вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className="about-project__block">
            <h3 className="about-project__title-block">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__info">У каждого этапа был мягкий и жёсткий дедлайн,
              которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <ul className="about-project__tab">
          <li className="about-project__tab-back">1 неделя</li>
          <li className="about-project__tab-front">4 недели</li>
          <li className="about-project__tab-txt">Back-end</li>
          <li className="about-project__tab-txt">Front-end</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutProject;
