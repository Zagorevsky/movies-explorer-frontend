import React from "react";
import './MoviesCard.css';

function MoviesCard({title, duration, link, isLiked, isSaved}) {
  return (
    <header className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__block-txt">
          <div className="movies-card__title" >{title}</div>
          <p className="movies-card__duration" >{duration}</p>
          <button className={(`movies-card__like ${isLiked ? 'movies-card__like_aktiv':''}  ${isSaved ? 'movies-card__like_delit':''}  `)}  />
        </div>
        <div className="movies-card__image" style={ { backgroundImage: `url(${link})` } }/>
      </div>
    </header>
  );

};

export default MoviesCard;
