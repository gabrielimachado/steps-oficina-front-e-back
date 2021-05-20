import React, { memo } from 'react'

import { Box, Divider } from '@material-ui/core'

import { AdminLayoutTaskboardItemLoading } from './AdminLayoutTaskboardItemLoading'

export const AdminLayoutTaskboardLoading = memo(() => {
  return (
    <Box>
      {Array.from({ length: 3 }).map(() => (
        <>
          <AdminLayoutTaskboardItemLoading />

          <Box my={3}>
            <Divider />
          </Box>
        </>
      ))}
    </Box>
  )
})
