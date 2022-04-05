export const BASE_URL_MAIN = 'https://api.kino-exp.students.nomoredomains.xyz';

// создание пользователя
export const register = (user) => {
  console.log(user)
  return fetch(`${BASE_URL_MAIN}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(user)
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
export const checkAuth = (token) => {
  return fetch(`${BASE_URL_MAIN}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    credentials: 'include'
  })
  .then(handlerError)
}

// выход
export const logOut= () => {
  return fetch(`${BASE_URL_MAIN}/signout`, {
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
export const updateProfile = (name, email) => {
  return fetch(`${BASE_URL_MAIN}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, email}),
    credentials: 'include'
  })
    .then(handlerError);
}

// добавления фильма в избранное
export const createMovie = (movie) => {
    return fetch(`${BASE_URL_MAIN}/movies/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
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

export const getUserMovies = () => {
  return fetch(`${BASE_URL_MAIN}/movies/`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include'
  })
    .then(handlerError);
}




function handlerError (res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export default handlerError;
