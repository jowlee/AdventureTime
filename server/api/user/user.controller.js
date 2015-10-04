'use strict';

var User = require('./user.model');
var Event = require('../event/event.model');

// creates initial user
exports.create = function(req, res){
  var username = req.body.username;
  console.log(req.body);
  if(!username) return handleError(res, err);
  var user = new User(req.body);
  user.save(function(err, user){
    if (err) return console.log(err);
    res.send(204);
  });
};

// edits user values
exports.edit = function(req, res){
  var username = req.body.username;
  console.log(req.body);
  if(!username) return handleError(res,err);
  User.findOne({'username': username}, function(err, user){
    if (err) return res.send(500, err);
    user.home = req.body.home;
    user.password = req.body.password;
    user.save(function(err){
    if (err) return res.send(500, err);
      res.json(200, {success: true});
    });
  });
};

//adds new tags
exports.addTag = function(req, res){
  var username = req.body.username;
  if(!username) return handleError(res,err);
  User.findOne({'username': username}, function(err, user){
    if (err) return res.send(500, err);
    var tag = req.body.tag;
    if (!tag) return handleError(res,err);
    user.tag.push(tag);
    user.save(function(err) {
      if (err) return validationError(res, err);
      res.json(200, {success: tag+" added"});
    });
  });
};

// removes tags
exports.removeTag = function(req, res){
  var username = req.body.username;
  var tag = req.body.tag;
  if(!username || !tag) return handleError(res,err);
  User.findOne({'username':username}, function(err, user){
    if(err) return res.send(500,err);
    var tagIndex = user.tag.indexOf(tag);
    if(tagIndex == -1) return res.json("tag does not exist can not remove")
    user.tag.splice(index,1);
    user.save(function(err) {
      if (err) return validationError(res, err);
      res.json(200, {success: tag+" removed"})
    });
  });
};

exports.addEvent = function(req, res){
  var username = req.body.username;
  var name = req.body.name;
  if(!name || !username) return handleError(res, err);
    User.findOne({'username':username}, function(err,user){
    if (err) return res.send(500,err);
      Event.findOne({'name': name}, function(err,newEvent){
      if (err) return res.send(500, err);
        user.events.push(newEvent);
        user.save(function(err) {
        if (err) return validationError(res, err);
          res.json(200, {success: newEvent.name + " added"});
        });
      });
    });
  };

  exports.getName = function(req, res){
    if(!req.params.username){
      console.log("in getName with no value");
      return res.json("No Name Input"); }
    else{
      Event.findOne({'name':req.params.username}, function(err, user){
        if (err) return res.send(500, err);
        return res.json(user.username);
      })
    };
  };

function handleError(res,err) {
  return res.send(500,err);
}

function validationError(res, err){
  return res.json(422,err);
}
