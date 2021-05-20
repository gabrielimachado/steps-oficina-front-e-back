import React, { useCallback, useMemo } from 'react'

import { useField, useFormikContext } from 'formik'

import { TextField, Typography } from '@material-ui/core'

export const Field = ({ margin = 'normal', name, variant = 'outlined', type = 'text', ...props }) => {
  const [{ value }, { error }, { setValue }] = useField(name)

  const { submitCount } = useFormikContext()

  const showError = useMemo(() => !!error && submitCount > 0, [submitCount, error])

  const helperText = useMemo(() => {
    if (showError) {
      return <Typography variant="body2">{error}</Typography>
    }

    return null
  }, [showError, error])

  const onChange = useCallback(
    (ev) => {
      setValue(ev.target.value)
    },
    [setValue]
  )

  return (
    <TextField
      {...props}
      type={type}
      id={name}
      error={showError && error}
      helperText={helperText}
      margin={margin}
      name={name}
      onChange={onChange}
      variant={variant}
      value={value}
      novalidate
    />
  )
}
