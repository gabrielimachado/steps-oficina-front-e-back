import React, { memo } from 'react'

import { Box } from '@material-ui/core'

import { AvatarGroup, Skeleton } from '@material-ui/lab'

import { Message, Send } from '@material-ui/icons'

export const AdminLayoutTaskboardItemLoading = memo(() => {
  return (
    <Box display="flex" alignItems="center">
      <Box marginRight={1}>
        <Skeleton variant="circle" width={40} height={40} />
      </Box>

      <Box display="flex" flexDirection="column" flex={1}>
        <Box display="flex">
          <Skeleton height={40} width={300} animation="wave" />
        </Box>

        <Box display="flex" alignItems="flex-end">
          <Box marginRight={1}>
            <Message />
          </Box>

          <Skeleton height={40} width={200} animation="wave" />
        </Box>

        <Box display="flex" alignItems="flex-end">
          <Box marginRight={1}>
            <Send />
          </Box>

          <Skeleton height={40} width={100} animation="wave" />
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="flex-end">
        <Box marginBottom={1}>
          <Skeleton height={40} width={100} animation="wave" />
        </Box>

        <AvatarGroup>
          {Array.from({ length: 3 }).map(() => (
            <Skeleton variant="circle" width={40} height={40} />
          ))}
        </AvatarGroup>
      </Box>
    </Box>
  )
})
