
const path = require('path');
const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.render('home', { title: 'Hey', message: 'Hello there!' });
});

module.exports = routes;
