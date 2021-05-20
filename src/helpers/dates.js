import moment from 'moment'

import { getCapitalize } from './strings'

export const formatDate = (dateTime) => {
  if (moment(dateTime).isValid) {
    if (moment(dateTime).isSame(moment(), 'day')) {
      return getCapitalize(moment(dateTime).format('dddd, HH:mm'))
    }

    return moment(dateTime).format('L')
  }

  return '-'
}
