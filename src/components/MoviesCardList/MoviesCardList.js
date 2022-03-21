import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import movis1 from "../../images/movie-1.svg"
import movis2 from "../../images/movie-2.svg"
import movis3 from "../../images/movie-3.svg"
import movis4 from "../../images/movie-4.svg"
import movis5 from "../../images/movie-5.svg"
import movis6 from "../../images/movie-6.svg"
import movis7 from "../../images/movie-7.svg"

function MoviesCardList() {
  return (
    <div className="movies-card-list">
      <div className="movies-card-list__container">
        <MoviesCard title="33 слова о дизайне" duration="1ч50" link={ movis1 } isLiked="true"/>
        <MoviesCard title="Киноальманах «100 лет дизайна»" duration="1ч50" link={ movis2 } />
        <MoviesCard title="В погоне за Бенкси" duration="1ч50" link={ movis3 } />
        <MoviesCard title="Баския: Взрыв реальности" duration="1ч50" link={ movis4 } isLiked="true"/>
        <MoviesCard title="Бег это свобода" duration="1ч50" link={ movis5 } />
        <MoviesCard title="Книготорговцы" duration="1ч50" link={ movis6 } />
        <MoviesCard title="Когда я думаю о Германии ночью" duration="1ч50" link={ movis7 } />
      </div>
      <button className="movies-card-list__button" type="submit" >Ещё</button>
    </div>
  );

};

export default MoviesCardList;
