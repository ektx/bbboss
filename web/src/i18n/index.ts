import { createI18n, type I18nOptions } from 'vue-i18n'

import cn from './cn'
import en from './en'

const i18nConfig: I18nOptions = {
  legacy: false,
  locale: 'cn',
  fallbackLocale: 'cn',
  messages: {
    ...cn,
    ...en
  }
}

export default createI18n(i18nConfig)
