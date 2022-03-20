import React from "react";
import './MoviesCard.css';

function MoviesCard() {
  return (
    <header className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__block-txt">
          <div className="movies-card__title" >33 слова о дизайне</div>
          <p className="movies-card__duration" >1ч 42м</p>
          <button className="movies-card__like-or-delete movies-card__like-or-delete_aktiv" />
        </div>
        <div className="movies-card__image" />
      </div>
    </header>
  );

};

export default MoviesCard;
