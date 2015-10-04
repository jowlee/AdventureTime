'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Event = require('../event/event.model');

var UserSchema = new Schema({
  username: {type:String, unique: true},
  //friendslist: [UserSchema],
  events: [Event],
  tag: [String],
  home: String,
  password: String
});

var User = mongoose.model("User", UserSchema)
module.exports = User
