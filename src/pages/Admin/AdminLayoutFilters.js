import React, { useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { FilterList } from '@material-ui/icons'
import { useQueryFavorites } from '../../api/queries/favorites'
import { AdminProvider } from './AdminContext'
import { stylesAdminLayoutFilters } from './styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'

export const AdminLayoutFilters = () => {
  const { subtaskArchived: archivedItems, archiveSubtask, setTaskId, taskId } = useContext(AdminProvider)
  const { t } = useTranslation()

  const classes = stylesAdminLayoutFilters()

  const { data: favorites = [] } = useQueryFavorites({ archivedItems }, { enabled: false })

  const items = useMemo(() => {
    if (favorites.length) {
      return favorites.reduce((acc, next, idx) => {
        if (idx === 1) {
          return [...acc.subMenus, ...next.subMenus]
        }

        return [...acc, ...next.subMenus]
      })
    }

    return []
  }, [favorites])

  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  const [open, setOpen] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickOpen2 = () => {
    setOpen2(true)
  }

  const handleClose2 = () => {
    setOpen2(false)
  }

  return (
    <Box display="flex" flexDirection="column" >
      <FormControl className={classes.formControl}>
        <InputLabel>{t('search')}</InputLabel>
        <Select value={taskId} onChange={(ev) => setTaskId(ev.target.value)}>
          {items.map((item) => (
            <MenuItem value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box display="flex" alignItems="center"  justifyContent="space-between" marginTop={3}>
        <Box display="flex">
          
        <Button onClick={handleClickOpen2} className={classes.buttonSpacing} color="primary" variant="contained">
            {t('toSchedule')}
          </Button>
        </Box>

       

        <Dialog open={open2} onClose={handleClose2} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title"  >Nova Atividade</DialogTitle>
          <DialogContent>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label" fullWidth>Materia</InputLabel>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em></em>
                </MenuItem>
                <MenuItem value={10}>Empreendedorismo</MenuItem>
                <MenuItem value={20}>Oficina</MenuItem>
                <MenuItem value={30}>Algebra Linear</MenuItem>
              </Select>
            </FormControl>
            <TextField autoFocus margin="dense" id="atividade" label="Atividade" fullWidth />
           

            
            <FormControl fullWidth   className={classes.formControl}  >
              <InputLabel autoFocus margin="dense" id="demo-simple-select-label" paddingLeft="5px"  >Atribuir Integrante</InputLabel>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em></em>
                </MenuItem>
                <MenuItem value={10}>Nenhum</MenuItem>
                <MenuItem value={20}>Hendrick</MenuItem>
                <MenuItem value={30}>Gabi</MenuItem>
                <MenuItem value={40}>Ari</MenuItem>
              </Select>
            </FormControl>

            <TextField autoFocus margin="dense" id="form-dialog-title" label="Novo Integrante" fullWidth />

          </DialogContent>
          <DialogActions >
            <Button  onClick={handleClose2} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose2} color="primary">
              Salvar
            </Button>
          </DialogActions>
        </Dialog>

        <FilterList />


      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" marginLeft={180} marginBottom={7}>

      <Box>
        <Button className={classes.buttonSpacing}  color="default" marginTop={50} PaddingX={50} variant="text" onClick={archiveSubtask}>
            {t('toFile')}
          </Button>
        </Box>
    </Box>
    </Box>
    
  )
}
