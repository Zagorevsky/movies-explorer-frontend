import React, { Suspense, useState, useEffect } from "react";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
const MoviesCard = React.lazy(() => import("../MoviesCard/MoviesCard"));

function MoviesCardList(props) {
  const [counter, setCounter] = useState(7);

  function downloadingMovies() {
    setCounter(counter + 7);
  }
  return (
    <>
      <section className="movies-card-list">
        <Suspense fallback={ <Preloader /> }>
          { props.moviesMessage ? (
            <p className="movies-card-list__container">{ props.moviesMessage }</p>
          ) : (
            props.movies
              .slice(0, counter)
              .filter(movie => !props.short || movie.duration <= 40)
              .map((movie, id) => (
                <MoviesCard movie={ movie } name={ movie.nameRU } duration={ movie.duration }
                  key={ id } id={ movie._id } { ...movie }
                  isSavedMovies={ props.isSavedMovies }
                  savedMovies={ props.savedMovies }
                  updateMoviesUser={props.updateMoviesUser}
                  movies={ props.movies }
                  setMoviesUser={ props.setMoviesUser }
                  setFilteredMoviesUser={ props.setFilteredMoviesUser }
                />
              ))
          ) }
        </Suspense>
      </section>
      { props.movies.length > counter &&
        props.movies.length <= 100 &&
        !props.moviesMessage ? (
        <section className="movies-card-list__container">
          <div type="button"
            onClick={ downloadingMovies }
            className="movies-card-list__button">Ещё</div>
        </section>
      ) : (
        ""
      ) }
    </>
  );
}

export default MoviesCardList;
