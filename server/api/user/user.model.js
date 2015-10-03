'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Event = require('../event/event.model');

var UserSchema = new Schema({
  name: String	,
  friendslist: [UserSchema],
  events: [Event],
  tags: [String],
  location: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema);
