"use strict";
exports.__esModule = true;
var express_1 = require("express");
var compression_1 = require("compression");
var morgan_1 = require("morgan");
var lusca = require("lusca");
var bodyParser = require("body-parser");
var path = require("path");
var port = 8080;
var app = express_1["default"]();
// Use  Compression
app.use(compression_1["default"]());
app.use(express_1["default"].static(path.join(__dirname, '../public')));
// Add logging in dev
app.use(morgan_1["default"]('dev'));
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
