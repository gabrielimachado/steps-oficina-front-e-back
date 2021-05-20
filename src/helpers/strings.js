export const getCapitalize = (string) => {
  if (typeof string !== 'string') return ''
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getInitials = (string) => {
  return string
    .match(/(\b\S)?/g)
    .join('')
    .match(/(^\S|\S$)?/g)
    .join('')
    .toUpperCase()
}
