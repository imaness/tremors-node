import express from 'express';
import compression from 'compression';
import logger from 'morgan'
import * as lusca from  'lusca'
import * as bodyParser from  'body-parser'
import * as path from 'path'

const port = 8080;
const app = express();

// Use  Compression
app.use(compression());

app.use(express.static(path.join(__dirname, '../public')));

// Add logging in dev
app.use(logger('dev'));
app.use(bodyParser.json());

// Remove common vulnerabilities
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.disable('x-powered-by');

app.set('view engine', 'pug');

// Primary app routes
app.use('/', require('./controllers/home'));
app.set('views', path.join(__dirname, '/views'));
// app.use('/api', require('./controllers/api'));

if (!module.parent) {
  app.listen(port);
}



module.exports = app;
