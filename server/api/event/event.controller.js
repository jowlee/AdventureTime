'use strict';

var Event = require('./event.model');

// get event name
exports.create = function(req, res){
  var eventName = req.body.name;
  console.log(req.body);
  if (!eventName){
    return handleError(res, "No event Specified");
  }
  var aEvent = new Event(req.body);
  aEvent.save(function(err, event){
    if (err) return validationError(res, err);
    res.send(204);
  });

};

// get event name
exports.edit = function(req, res){
  var eventName = req.body.eventName;
  if (!eventName){
    return handleError(res, "No event Specified");
  }
  Event.findOne({
    "name": req.body.name
  },function(err, event){
    if (event){
      event = req.body
    }else{
      console.log("Already exists")
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
