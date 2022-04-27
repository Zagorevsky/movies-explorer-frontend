import React from "react";
import './Techs.css';

function Techs() {
  return (
    <div id="techs" className="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
          <div className="techs__block">
            <h3 className="techs__title-block">7 технологий</h3>
            <p className="techs__info">На курсе веб-разработки мы освоили технологии,
            которые применили в дипломном проекте.</p>
          </div>
        <ul className="techs__tab">
          <li className="techs__tab-banner">HTML</li>
          <li className="techs__tab-banner">CSS</li>
          <li className="techs__tab-banner">JS</li>
          <li className="techs__tab-banner">React</li>
          <li className="techs__tab-banner">Git</li>
          <li className="techs__tab-banner">Express.js</li>
          <li className="techs__tab-banner">mongoDB</li>
        </ul>
      </div>
    </div>
  );

};

export default Techs;
