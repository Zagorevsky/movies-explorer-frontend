import handlerError from './MainApi.js'

export const BASE_URL_MUVIES = 'https://api.nomoreparties.co';

// получение всех фильмов
export const getInitialMovies = () => {
  return fetch(`${BASE_URL_MUVIES}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(handlerError)
}
