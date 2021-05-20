export function getTheme() {
  return window.localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_THEME)
}

export function setTheme(theme) {
  return window.localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN_THEME, theme)
}
