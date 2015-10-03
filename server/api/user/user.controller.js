'use strict';

var User = require('./user.model');

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
      })
    });
  };
  

function handleError(res,err) {
  return res.send(500,err);
}

function validationError(res, err){
  return res.json(422,err);
}
