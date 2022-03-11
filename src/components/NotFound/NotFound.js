import React from "react";
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <p className="not-found__title">404</p>
        <p className="not-found__txt">Страница не найдена</p>
        <a className="not-found__link" href="/">Назад</a>
      </div>
    </div>
  );

};

export default NotFound;
