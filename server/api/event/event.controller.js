'use strict';

var Event = require('./event.model');

// get event name
exports.create = function(req, res){
  var eventName = req.body.eventName;
  console.log("heelp")
  if (!eventName){
    return handleError(res, "No event Specified");
  }
  Event.findone({
    "eventName": req.body.eventName
  },function(err, event){
    if (event){
      console.log("Already exists")
    }else{
      // Create new class year and set as current
      event = new Event(req.body);
    }
    event.save(function(err, event){
      if (err) return validationError(res, err);
      res.send(204);
    });
  })
};

function handleError(res, err) {
  return res.send(500, err);
};

function validationError(res, err) {
  return res.json(422, err);
};
