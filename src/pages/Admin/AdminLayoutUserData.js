import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Avatar, Box, Button } from '@material-ui/core'
import { AuthContext } from '../../providers/auth'
import { getInitials } from '../../helpers/strings'
import { AdminLayoutUserDataStyledBadge, stylesAdminLayoutUserData } from './styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'

export const AdminLayoutUserData = () => {
  const { t } = useTranslation()
  const { userLogged } = useContext(AuthContext)

  const [open, setOpen] = React.useState(false)
 

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  


  const classes = stylesAdminLayoutUserData()

  return (
    <Box display="flex" flex={1} alignItems="center" justifyContent="space-between">
      <AdminLayoutUserDataStyledBadge
        overlap="circle"  
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar className={classes.avatar}>{getInitials(userLogged.name)}</Avatar>
      </AdminLayoutUserDataStyledBadge>

      <Box display="flex" marginLeft={8}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleClickOpen}
        >
          {t('new')}
        </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Nova materia</DialogTitle>
          <DialogContent>
            <TextField autoFocus margin="dense" id="materia" label="Materia" fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  )
}
