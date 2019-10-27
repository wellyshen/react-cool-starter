export default {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT || 8080,
  api: {
    baseUrl: process.env.API_URL
  },
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'React Cool Starter',
    titleTemplate: 'React Cool Starter - %s',
    meta: [
      {
        name: 'description',
        content: 'The best react universal starter boilerplate in the world.'
      }
    ]
  }
};
