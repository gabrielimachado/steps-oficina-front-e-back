import React, { useCallback, useContext, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { Form, Formik } from 'formik'
import * as yup from 'yup'

import { Avatar, Button, Checkbox, Container, FormControlLabel, Typography } from '@material-ui/core'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import { Field } from '../../components/Field'

import { styles } from './styles'

import { AuthContext } from '../../providers/auth'

import RegisterDrawer from './RegisterDrawer'

export default function Auth() {
  const { login } = useContext(AuthContext)

  const { t } = useTranslation()

  const classes = styles()

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      email: yup.string().email(t('emailInvalid')).required(t('requiredEmail')),
      password: yup.string().required(t('requiredPassword')),
    })
  }, [t])

  const onSubmit = useCallback(
    (values, formik) => {
      login(values).catch((e) => {
        formik.setFieldError('email', e.message)
        formik.setSubmitting(false)
      })
    },
    [login]
  )

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          {t('loginPage')}
        </Typography>

        <Formik initialValues={{}} onSubmit={onSubmit} validationSchema={validationSchema}>
          {({ isSubmitting }) => (
            <Form className={classes.form} noValidate>
              <Field required fullWidth label={t('email')} name="email" autoComplete="email" autoFocus />

              <Field
                required
                fullWidth
                name="password"
                label={t('password')}
                type="password"
                autoComplete="current-password"
              />

              <RegisterDrawer />

              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label={t('rememberMe')} />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                className={classes.submit}
              >
                {t('signIn')}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}
