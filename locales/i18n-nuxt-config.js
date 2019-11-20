const I18N = {
  useCookie: false,
  alwaysRedirect: true,
  locales: [
    {
      code: 'ja',
      iso: 'jp',
      name: 'Japanese',
      file: 'ja/index.js'
    },
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en/index.js'
    }
  ],
  lazy: true,
  seo: false,
  langDir: '/locales/',
  defaultLocale: 'ja',
  parsePages: false
}

module.exports = {
  I18N
}
