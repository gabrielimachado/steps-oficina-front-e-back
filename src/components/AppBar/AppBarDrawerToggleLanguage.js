import React, { useCallback, useMemo, useState } from 'react'

import { useTranslation } from 'react-i18next'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from '@material-ui/core'

import { Translate } from '@material-ui/icons'

import { useLanguage } from '../../hooks/useLanguage'

import { stylesDrawerToggleLanguage } from './styles'

export const AppBarDrawerToggleLanguage = () => {
  const { changeLanguage } = useLanguage()
  const { i18n, t } = useTranslation()

  const resources = useMemo(() => {
    return Object.keys(i18n.store.data)
  }, [i18n])

  const [language, setLanguage] = useState(i18n.language)
  const [openedSelect, setOpenSelect] = useState(false)

  const handleChange = useCallback((event) => {
    setLanguage(event.target.value)
  }, [])

  const classes = stylesDrawerToggleLanguage()

  const handleClickOpen = useCallback(() => {
    setOpenSelect(true)
  }, [setOpenSelect])

  const handleClose = useCallback(() => {
    setOpenSelect(false)
  }, [setOpenSelect])

  const handleConfirm = useCallback(() => {
    changeLanguage(language)
    handleClose()
  }, [changeLanguage, handleClose, language])

  return (
    <>
      <ListItem button onClick={handleClickOpen}>
        <ListItemIcon>
          <Translate />
        </ListItemIcon>

        <ListItemText primary={t(i18n.language)} />
      </ListItem>

      <Dialog disableBackdropClick disableEscapeKeyDown open={openedSelect} onClose={handleClose}>
        <DialogTitle>{t('changeLanguage')}</DialogTitle>

        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel>{t('language')}</InputLabel>
              <Select value={language} onChange={handleChange} input={<Input />}>
                {resources.map((resource) => (
                  <MenuItem value={resource}>{t(resource)}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {t('cancel')}
          </Button>
          <Button onClick={handleConfirm} color="primary">
            {t('confirm')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
