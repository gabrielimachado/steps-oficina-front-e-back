import React, { Suspense } from 'react'

import 'moment/locale/pt-br'
import 'moment/locale/es'

import { I18nextProvider } from 'react-i18next'

import i18n from './i18n'
import Auth from './auth'
import Theme from './theme'

import { ReactQueryProvider } from './reactQuery'

const Providers = ({ children }) => {
  return (
    <Theme>
      <I18nextProvider i18n={i18n}>
        <ReactQueryProvider>
          <Suspense fallback={() => <p>Carregando...</p>}>
            <Auth>{children}</Auth>
          </Suspense>
        </ReactQueryProvider>
      </I18nextProvider>
    </Theme>
  )
}

export default Providers
