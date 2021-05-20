import { createContext } from 'react'

import { useQueryClient, useQuery } from 'react-query'

import * as authService from '../services/auth'

export const AuthContext = createContext('auth')

const Auth = ({ children }) => {
  const { data: userLogged } = useQuery('auth', authService.bootstrap)

  const client = useQueryClient()

  const updateAuthData = (data) => client.setQueryData('auth', data)

  const login = (values) => authService.login(values).then(updateAuthData)
  const logout = () => authService.logout().then(() => window.location.reload())

  return (
    <AuthContext.Provider
      value={{
        userLogged,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default Auth
