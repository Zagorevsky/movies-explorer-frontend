import React, { Suspense, useState } from "react";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import { MIN, MAX } from "../../utils/utils";

const MoviesCard = React.lazy(() => import("../MoviesCard/MoviesCard"));


function MoviesCardList(props) {

  const [counter, setCounter] = useState(props.counter);

  function downloadingMovies() {
    setCounter(counter + MIN);
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
              .map((movie, id) => (
                <MoviesCard movie={ movie } name={ movie.nameRU } duration={ movie.duration }
                  key={ id } id={ movie._id } { ...movie }
                  isSavedMovies={ props.isSavedMovies }
                  savedMovies={ props.savedMovies }
                  updateMoviesUser={ props.updateMoviesUser }
                  movies={ props.movies }
                  setMoviesUser={ props.setMoviesUser }
                  setFilteredMoviesUser={ props.setFilteredMoviesUser }
                />
              ))
          ) }
        </Suspense>
      </section>
      { props.movies.length >= MIN &&
      props.movies.length > counter &&
      props.movies.length <= MAX &&
      !props.moviesMessage  ? (
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
