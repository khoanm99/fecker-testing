const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
    localeDetection: false
  },
  localePath: path.resolve('./translations/locales'),
  fallbackLng: {
    default: ['de']
  }
};
