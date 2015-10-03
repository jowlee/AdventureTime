'use strict';

var User = require('./user.model');

exports.create = function(req, res){
  var username = req.body.username;
  console.log(req.body);
  if(!username) return handleError(res, "no username specified");
  User.findOne({
    "username": req.body.username
  },function(err, user){
    if (user){
      console.log("already exists");
    }else{
      user = new User(req.body);
    }
    user.save(function(err, user){
      if (err) return console.log(err);
      res.send(204);
    });
  })
};

// exports.changeUsername = function(req, res){
//   var newUsername = req.body.username;
//
// }
// exports.changeBio = function(req,res){
//     var userId = req.user._id;
//     var newBio = String(req.body.bio);
//
//     User.findById(userId, function(err,user){
//         user.bio = newBio;
//         res.json({bio:user.bio});
//         user.save(function(err){
//             if (err) return validationError(res,err);
//             res.send(200);
//         })
//
//     });
//};

function handleError(res,err) {
  return res.send(500,err);
}

function validationError(res, err){
  return res.json(422,err);
}
