import BASE_URL_MUVIES from './utils.js'
import handlerError from './MainApi'


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
