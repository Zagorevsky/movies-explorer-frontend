import handlerError from './MainApi'

export const BASE_URL_MUVIES = 'https://api.nomoreparties.co';

// проверка состояния авторизации
export const checkAuth = () => {
  return fetch(`${BASE_URL_MUVIES}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  })
  .then(handlerError)
}
