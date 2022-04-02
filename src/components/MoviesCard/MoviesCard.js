import React, { useState, useEffect } from 'react';
import './MoviesCard.css';
import { baseUrl } from "../../utils/utils.js";
import * as auth from '../../utils/MainApi';

function MoviesCard(props) {
  const [liked, setliked] = useState(false);

  useEffect(() => {
    const userMovies = JSON.parse(localStorage.getItem('moviesUser'));
    setliked(userMovies.some((userMovie) => userMovie.movieId === props.movie.id))
  }, [])

  const сlickLikedMovies = () => {
    if (!props.isSavedMovies && !liked) {
      auth
        .createMovie({
          "country": props.movie.country,
          "director": props.movie.director,
          "duration": props.movie.duration,
          "year": props.movie.year,
          "description": props.movie.description,
          "image": `${baseUrl}${props.movie.image
            ? props.movie.image.url : ""}`,
          "trailerLink": props.movie.trailerLink,
          "thumbnail": `${baseUrl}${props.movie.image.formats.thumbnail
            ? props.movie.image.formats.thumbnail.url : ""}`,
          "movieId": props.movie.id,
          "nameRU": props.movie.nameRU,
          "nameEN": props.movie.nameEN,
        })
        .then(movies => {
          props.movie._id = movies._id
          setliked(true);
          props.updateMoviesUser()
        })
        .catch((err) => {
          console.log(err)
        });
    } else {
      auth
        .deleteMovie(props.movie._id)
        .then(movies => {
          setliked(false);
        })
        .catch((err) => {
          console.log(err)
        });
    }
  }

  return (
    <header className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__block-txt">
          <div className="movies-card__title" >{ props.name || props.movie.nameRU }</div>
          <p className="movies-card__duration" >{ props.duration }</p>
          <button className={
            (`movies-card__like ${liked ? 'movies-card__like_aktiv' : ''} ${props.isSavedMovies ? 'movies-card__like_delit' : ''}  `) }
            onClick={ сlickLikedMovies } />
        </div>
        <a href={ props.trailerLink || props.trailer } target="_blank" rel="noopener noreferrer nofollow">
          <img className="movies-card__image"
            alt={ props.name }
            src={ props.isSavedMovies ? props.movie.image :
              `${baseUrl}${props.movie.image ? props.movie.image.url : props.image}`
            } />
        </a>
      </div>
    </header>
  );

};

export default MoviesCard;
