/**
 * Main application file
 */

'use strict';

var express = require('express');
var mongoose = require('mongoose');
// var config = require('./config/environment');
var expressConfig = require('./config/express');
var routes = require('./routes');
var app = express();
var server = require('http').createServer(app);

// Connect to database
mongoose.connect('mongodb://localhost/AdventureTime');

// Setup server
expressConfig(app);
routes(app);

server.listen(8080);
console.log("The magic on port 8080");

// Expose app
exports = module.exports = app;
