import { Box } from '@material-ui/core'
import React from 'react'

import { AppBar } from '../../components/AppBar'

import { AdminContext } from './AdminContext'
import { AdminLayout } from './AdminLayout'

const Admin = () => {
  return (
    <AdminContext>
      <AppBar />

      {/* Margem necessária para manter app bar fixa */}
      <Box marginTop={8}>
        <AdminLayout />
      </Box>
    </AdminContext>
  )
}

export default Admin
