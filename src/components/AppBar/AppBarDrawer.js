import React from 'react'

import { Box, Divider, Drawer, List } from '@material-ui/core'

import { AppBarDrawerProfile } from './AppBarDrawerProfile'
import { AppBarDrawerToggleLanguage } from './AppBarDrawerToggleLanguage'
import { AppBarDrawerToggleTheme } from './AppBarDrawerToggleTheme'
import { AppBarDrawerLogout } from './AppBarDrawerLogout'

export const AppBarDrawer = ({ opened, toggle }) => {
  return (
    <Drawer anchor="left" open={opened} onClose={toggle}>
      <Box width={300}>
        <AppBarDrawerProfile />

        <Divider />

        <List>
          <AppBarDrawerToggleTheme />

          <AppBarDrawerToggleLanguage />
        </List>

        <Divider />

        <AppBarDrawerLogout />
      </Box>
    </Drawer>
  )
}
