import db from '../db.json'

export const mutationLogin = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    const userLogging = db.users.find((user) => user.email === email && user.password === password)

    if (userLogging) {
      return resolve(userLogging)
    }

    return reject({
      message: 'Credenciais incorretas!',
    })
  })
}
