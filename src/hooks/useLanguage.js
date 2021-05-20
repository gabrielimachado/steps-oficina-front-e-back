import { useCallback } from 'react'

import moment from 'moment'

import i18next from '../providers/i18n'

import { setLanguage } from '../services/language'

export const useLanguage = () => {
  const changeLanguage = useCallback((language) => {
    i18next.changeLanguage(language)
    moment.locale(language)

    setLanguage(language)
  }, [])

  return {
    changeLanguage,
  }
}
