'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: String	,
  duration: Number,
  cost: Number,
  fun: Number,
  indoor: Boolean,
  fitness: Number
});

Event = mongoose.model('Event', EventSchema);
module.exports = Event;
