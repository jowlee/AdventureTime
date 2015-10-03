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
  var name = req.body.name;
  if(!name) return handleError(res,err);
  User.findOne({'name': name}, function(err, user){
    if (err) return res.send(500, err);
      user.cost = req.body.cost;
      user.fun = req.body.fun;
      user.save(function(err){
      if (err) return res.send(500, err);
        res.json(200, {success: true});
      })
    });
  };


function handleError(res, err) {
  return res.send(500, err);
};

function validationError(res, err) {
  return res.json(422, err);
};
