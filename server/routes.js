/**
 * Main application routes
 */

'use strict';

var express = require('express');
// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');

module.exports = function(app) {


  // Configuring Passport
  app.use(expressSession({secret: 'mySecretKey'}));
  app.use(passport.initialize());
  app.use(passport.session());

  // Insert routes below
  app.use('/api/users', require('./api/user'));
  app.use('/api/event', require('./api/event'));

  // All undefined asset or api routes should return a 404

  app.use('/auth', require('./auth'));



  //All other routes should redirect to the index.html
  app.route('/')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
