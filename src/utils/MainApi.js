import BASE_URL_MAIN from './utils.js'

// создание пользователя
export const register = (name, email, password) => {
  return fetch(`${BASE_URL_MAIN}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({name, email, password})
  })
  .then(handlerError)
};

//  авторизация пользователя
export const authorize = (email, password) => {
  return fetch(`${BASE_URL_MAIN}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({email, password})
  })
  .then(handlerError)
};

// проверка состояния авторизации
export const checkAuth = () => {
  return fetch(`${BASE_URL_MAIN}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  })
  .then(handlerError)
}

// изменение данных профиля
export const updateProfile = (data) => {
  return fetch(`${BASE_URL_MAIN}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include'
  })
    .then(handlerError);
}

// добавления фильма в избранное
export const createMovie = (data) => {
  return fetch(`${BASE_URL_MAIN}/movies/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include'
  })
    .then(handlerError);
}

// удаление фильма из избранного
export const deleteMovie = (id) => {
  return fetch(`${BASE_URL_MAIN}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  })
    .then(handlerError);
}

export const handlerError = (res) => {
  if (res.ok) {
    return res.json();
  }
  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка: ${res.status}`);
}
