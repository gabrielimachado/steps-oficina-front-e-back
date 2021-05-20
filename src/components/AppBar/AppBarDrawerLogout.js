import React, { useContext } from 'react'

import { useTranslation } from 'react-i18next'

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import { AuthContext } from '../../providers/auth'

export const AppBarDrawerLogout = () => {
  const { logout } = useContext(AuthContext)
  const { t } = useTranslation()

  return (
    <List>
      <ListItem button onClick={logout}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary={t('exit')} />
      </ListItem>
    </List>
  )
}
