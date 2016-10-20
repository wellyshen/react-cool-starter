module.exports = {
  host: process.env.NODE_HOST || 'localhost',
  port: process.env.NODE_PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'React Cool Starter',
    titleTemplate: 'React Cool Starter - %s',
    meta: [
      { name: 'description', content: 'The best react universal starter boilerplate in the world.' },
    ],
  },
};
