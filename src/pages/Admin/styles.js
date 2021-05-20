import { Badge, makeStyles, withStyles } from '@material-ui/core'

import { deepPurple } from '@material-ui/core/colors'

export const stylesAdminLayoutFavorites = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
})

export const stylesAdminLayoutFilters = makeStyles({
  buttonSpacing: {
    marginRight: 20,
  },
  formControl: {
    margin: 1,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: 2,
  },
})


export const stylesAdminLayoutUserData = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}))

export const AdminLayoutUserDataStyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },


  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge)
