/**
 * Express configuration
 */

'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./environment');

module.exports = function(app) {
  // var env = app.get('env');

  app.set('view engine', 'html');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(config.root, 'client')));
  app.set('appPath', 'client');
  app.use(morgan('dev'));
};
