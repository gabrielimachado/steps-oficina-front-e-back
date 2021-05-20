import React, { Suspense, useMemo } from 'react'

import { Box, CircularProgress, Divider, useTheme } from '@material-ui/core'

import { AdminLayoutFavorites } from './AdminLayoutFavorites'
import { AdminLayoutFilters } from './AdminLayoutFilters'
import { AdminLayoutUserData } from './AdminLayoutUserData'
import { AdminLayoutTaskboard } from './AdminLayoutTaskboard'
import { AdminLayoutTaskboardLoading } from './AdminLayoutTaskboardLoading'

export const AdminLayout = () => {
  const theme = useTheme()

  const boxBorderRight = useMemo(() => {
    return `1px solid ${theme.palette.divider}`
  }, [theme.palette.divider])

  return (
    <Box display="flex" flex={1} minHeight="calc(100vh - 64px)">
      <Box width={400} paddingX={3} paddingY={4} borderRight={boxBorderRight}>
        <AdminLayoutUserData />

        <Box marginY={2}>
          <Divider />
        </Box>

        <Suspense fallback={<CircularProgress />}>
          <AdminLayoutFavorites />
        </Suspense>
      </Box>

      <Box display="flex" flexDirection="column" flex={1} margin={3} marginTop={5}>
        <Box marginBottom={5}>
          <AdminLayoutFilters />
        </Box>

        <Suspense fallback={<AdminLayoutTaskboardLoading />}>
          <AdminLayoutTaskboard />
        </Suspense>
      </Box>
    </Box>
  )
}
