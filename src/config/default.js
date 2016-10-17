const port = process.env.NODE_ENV === 'production' ? 8080 : 3000;

module.exports = {
  host: 'localhost',
  port,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'React Cool Starter',
    titleTemplate: 'React Cool Starter - %s',
    meta: [
      { name: 'description', content: 'The best react universal starter boilerplate in the world.' },
    ],
  },
};
