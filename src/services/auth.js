import jwtDecode from 'jwt-decode'

import { mutationLogin } from '../api/mutations/login'

export function getToken() {
  return window.localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_KEY)
}

export function setToken(token) {
  return window.localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN_KEY, token)
}

export function removeToken() {
  return window.localStorage.removeItem(process.env.REACT_APP_AUTH_TOKEN_KEY)
}

function authenticate(params = {}) {
  return mutationLogin(params).then((data) => {
    setToken(data.token)

    return data
  })
}

export function bootstrap() {
  const token = getToken()

  if (!token) {
    return Promise.resolve(null)
  }

  return jwtDecode(token)
}

export function login({ email, password }) {
  return authenticate({ email, password }).then(bootstrap)
}

export function logout() {
  removeToken()

  return Promise.resolve(null)
}
