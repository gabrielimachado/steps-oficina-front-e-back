import React, { useContext } from 'react'

import { useTranslation } from 'react-i18next'

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

import { Brightness4, BrightnessHigh } from '@material-ui/icons'

import { ThemeContext } from '../../providers/theme'

export const AppBarDrawerToggleTheme = () => {
  const { t } = useTranslation()
  const { palletMode, togglePallet } = useContext(ThemeContext)

  return (
    <ListItem button onClick={togglePallet}>
      <ListItemIcon>{palletMode === 'light' ? <BrightnessHigh /> : <Brightness4 />}</ListItemIcon>
      <ListItemText primary={t('switchTheme')} />
    </ListItem>
  )
}
