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

exports.authenticate = function(req, res){
	  // find the user
	  User.findOne({
	    username: req.body.username
	  }).select('name username password').exec(function(err, user) {

	    if (err) throw err;
	    // no user with that username was found
	    if (!user) {
	      res.json({
	      	success: false,
	      	message: 'Authentication failed. User not found.'
	    	});
	    } else if (user) {
	      // check if password matches
	      var validPassword = user.comparePassword(req.body.password);
	      if (!validPassword) {
	        res.json({
	        	success: false,
	        	message: 'Authentication failed. Wrong password.'
	      	});
	      } else {
	        // if user is found and password is right
	        // create a token
	        var token = jwt.sign({
	        	name: user.name,
	        	username: user.username
	        }, superSecret, {
	          expiresInMinutes: 1440 // expires in 24 hours
	        });
	        // return the information including token as JSON
	        res.json({
	          success: true,
	          message: 'Enjoy your token!',
	          token: token
	        });
	      }
	    }

	  });
	};


function handleError(res,err) {
  return res.send(500,err);
}

function validationError(res, err){
  return res.json(422,err);
}
