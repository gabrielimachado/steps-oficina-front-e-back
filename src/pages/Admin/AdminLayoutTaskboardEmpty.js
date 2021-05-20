import React from 'react'

import { useTranslation } from 'react-i18next'

import { Box } from '@material-ui/core'

export const AdminLayoutTaskboardEmpty = () => {
  const { t } = useTranslation()

  return (
    <Box display="flex" flex={1} flexDirection="column" alignItems="center">
      <img alt="search" width={200} height={200} src="/assets/search.svg" />

      <Box fontWeight="fontWeightBold" fontSize={16} marginTop={2}>
        {t('noItemsFound')}
      </Box>

      <Box fontWeight="fontWeightLight" fontSize={14} marginTop={1}>
        {t('selectSubtaskMenuBeside')}
      </Box>
    </Box>
  )
}
