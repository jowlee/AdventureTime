'use strict';

var path = require('path');
var _ = require('lodash');


// All configurations will extend these options
// ============================================
var all = {
  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'Adventure-Time'
  },
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all
);
