import React, { memo } from 'react'

import { QueryClient, QueryClientProvider, QueryCache } from 'react-query'

export const ReactQueryProvider = memo(({ children }) => {
  const cache = new QueryCache()

  const defaultOptions = {
    queries: {
      suspense: true,
    },
  }

  const client = new QueryClient({ cache, defaultOptions })

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
})
