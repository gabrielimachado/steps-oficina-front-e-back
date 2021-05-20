import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { getLanguage } from '../services/language'

const resources = {
  'en-US': {
    translation: {
      app_title: 'Steps',
      loginPage: 'Login page',
      email: 'Email',
      password: 'Password',
      rememberMe: 'Remember me',
      signIn: 'Sign In',
      help: 'Help',
      settings: 'Settings',
      myProfile: 'My profile',
      favorites: 'Favorites',
      exit: 'Exit',
      search: 'Search',
      toAssign: 'To assign',
      toFile: 'To file',
      toSchedule: 'To Schedule',
      confirm: 'Confirm',
      cancel: 'Cancel',
      new: 'New',
      switchTheme: 'Switch theme',
      changeLanguage: 'Change language',
      language: 'Language',
      'pt-BR': 'Brazilian Portuguese',
      'en-US': 'English',
      'es-ES': 'Spanish',

      requiredEmail: 'Required email!',
      requiredPassword: 'Required password!',
      invalidEmail: 'Invalid email!',
      noItemsFound: 'No items found!',
      selectSubtaskMenuBeside: 'Select a subtask from the menu beside.',
    },
  },
  'es-ES': {
    translation: {
      app_title: 'Steps',
      loginPage: 'Página de inicio de sesión',
      email: 'Correo electrónico',
      password: 'Contraseña',
      rememberMe: 'Acordarse de mi',
      signIn: 'Entra',
      help: 'Ayuda',
      settings: 'Configuraciones',
      myProfile: 'Mi perfil',
      favorites: 'Marcadores',
      exit: 'Salir',
      search: 'Buscar',
      toAssign: 'Asignar',
      toFile: 'Archivar',
      toSchedule: 'Para programar',
      confirm: 'Confirmar',
      cancel: 'Cancelar',
      new: 'Nuevo',
      switchTheme: 'Cambiar tema',
      changeLanguage: 'Cambiar idioma',
      language: 'Idioma',
      'pt-BR': 'Portugués de Brasil',
      'en-US': 'Inglés',
      'es-ES': 'Español',

      requiredEmail: 'Correo electronico es requerido!',
      requiredPassword: 'Se requiere contraseña!',
      invalidEmail: 'Correo electronico es inválido!',
      noItemsFound: 'No se encontraron artículos!',
      selectSubtaskMenuBeside: 'Seleccione una subtarea del menú al lado.',
    },
  },
  'pt-BR': {
    translation: {
      app_title: 'Steps',
      loginPage: 'Página de login',
      email: 'Email',
      password: 'Senha',
      rememberMe: 'Lembrar de mim',
      signIn: 'Entrar',
      help: 'Ajuda',
      settings: 'Configurações',
      myProfile: 'Meu perfil',
      favorites: 'Materias',
      exit: 'Sair',
      search: 'Pesquisar',
      toAssign: 'Atribuir integrantes',
      toFile: 'Arquivar',
      toSchedule: 'Nova atividade',
      confirm: 'Confirmar',
      cancel: 'Cancelar',
      new: 'Novo',
      switchTheme: 'Alternar tema',
      changeLanguage: 'Alterar linguagem',
      language: 'Linguagem',
      'pt-BR': 'Português do Brasil',
      'en-US': 'Inglês',
      'es-ES': 'Espanhol',

      requiredEmail: 'Email é obrigatório!',
      requiredPassword: 'Senha é obrigatória!',
      invalidEmail: 'Email inválido!',
      noItemsFound: 'Nenhum item encontrado!',
      selectSubtaskMenuBeside: 'Selecione uma subtarefa no menu ao lado.',
      registerPage: 'Cadastra-se',
      name: 'Nome',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguage() || 'pt-BR',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
