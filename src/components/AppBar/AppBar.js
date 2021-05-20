import React from 'react'

import { useTranslation } from 'react-i18next'

import { AppBar as AppBarMaterialUI, Button, IconButton, Toolbar, Typography } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

import { useToggle } from '../../hooks/useToggle'

import { AppBarDrawer } from './AppBarDrawer'
import { styles } from './styles'

export const AppBar = () => {
  const { t } = useTranslation()

  const [opened, toggle] = useToggle()

  const classes = styles()

  return (
    <>
      <AppBarMaterialUI position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {t('app_title')}
          </Typography>
          <Button color="inherit">{t('help')}</Button>

          <Button color="inherit">{t('settings')}</Button>
        </Toolbar>
      </AppBarMaterialUI>

      {opened && <AppBarDrawer opened={opened} toggle={toggle} />}
    </>
  )
}
