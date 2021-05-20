import React, { useMemo } from 'react'
import clsx from 'clsx'
import { Drawer } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Field } from '../../components/Field'
import { styles } from './styles'
import { Button, Typography } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import IconButton from '@material-ui/core/IconButton'
import { useTheme } from '@material-ui/core/styles'
import { Form, Formik } from 'formik'
import * as yup from 'yup'

export default function SwipeableTemporaryDrawer() {
  const { t } = useTranslation()

  const classes = styles()

  const theme = useTheme()

  const [open, setOpen] = React.useState(false)

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      email: yup.string().email(t('emailInvalid')).required(t('requiredEmail')),
      password: yup.string().required(t('requiredPassword')),
    })
  }, [t])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Typography component="h1" variant="h5">
        {t('registerPage')}
      </Typography>

      <Formik initialValues={{}} validationSchema={validationSchema}>
        {({ isSubmitting }) => (
          <Form className={classes.form} noValidate>
            <Field required fullWidth name="name" label={t('name')} />
            <Field required fullWidth name="email1" label={t('email')} autoComplete="current-password" />
            <Field
              required
              fullWidth
              name="password1"
              label={t('password')}
              type="password"
              autoComplete="current-password"
            />

            <Button
              disabled={isSubmitting}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {t('registerPage')}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )

  return (
    <div>
      {['Cadastre-se'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={handleDrawerOpen}>{anchor}</Button>
          <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
