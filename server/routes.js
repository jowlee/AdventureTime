/**
 * Main application routes
 */

'use strict';

var express = require('express');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/user', require('./api/user'));
  app.use('/api/event', require('./api/event'));

  // All undefined asset or api routes should return a 404

  //All other routes should redirect to the index.html
  app.route('/')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
