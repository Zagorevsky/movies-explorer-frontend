import React from "react";
import './MoviesCard.css';
import { baseUrl } from "../../utils/utils.js";

function MoviesCard(props) {

  const isLiked = !props.isSavedMovies;


  const handleLikeClick = () => { }

  return (
    <header className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__block-txt">
          <div className="movies-card__title" >{ props.name || props.movie.nameRU }</div>
          <p className="movies-card__duration" >{ props.duration }</p>
          <button className={ (`movies-card__like ${isLiked ? 'movies-card__like_aktiv':''} ${props.isSavedMovies ? 'movies-card__like_delit':''}  `) } onClick={ handleLikeClick } />
        </div>
        <a href={ props.trailerLink || props.trailer } target="_blank" rel="noopener noreferrer nofollow">
          <img className="movies-card__image" alt={ props.name }
            src={ props.isSavedMovies ? props.movie.image :
              `${baseUrl}${props.movie.image ? props.movie.image.url : props.image}`
            } />
        </a>
      </div>
    </header>
  );

};

export default MoviesCard;
