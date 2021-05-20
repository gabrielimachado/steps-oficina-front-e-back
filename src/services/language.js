export function getLanguage() {
  return window.localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_LANGUAGE)
}

export function setLanguage(language) {
  return window.localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN_LANGUAGE, language)
}
