'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: {type:String, unique: true},
  location: {type:String},
  duration: {type:Number},
  cost: {type:Number},
  fun: {type:Number},
  indoor: {type:Boolean},
  fitness: {type:Number}
});

var Event = mongoose.model('Event', EventSchema);
module.exports = Event;
