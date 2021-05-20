import React, { lazy, Suspense, useContext, useMemo } from 'react'

import { CircularProgress } from '@material-ui/core'

import { AuthContext } from './providers/auth'

const Admin = lazy(() => import('./pages/Admin'))
const Auth = lazy(() => import('./pages/Auth'))

function App() {
  const { userLogged } = useContext(AuthContext)

  const Component = useMemo(() => {
    if (!userLogged) {
      return Auth
    }

    return Admin
  }, [userLogged])

  return (
    <Suspense fallback={<CircularProgress />}>
      <Component />
    </Suspense>
  )
}

export default App
