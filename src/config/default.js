/* eslint max-len:0 */

module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'React Cool Starter',
    titleTemplate: 'React Cool Starter - %s',
    meta: [
      { name: 'description', content: 'The best react universal starter boilerplate in the world.' },
    ],
  },
};
