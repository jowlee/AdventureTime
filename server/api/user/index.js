'use strict';

var express = require('express');
var user = require('./user.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.put('/create', user.create);
router.post('/edit', , user.edit);
router.post('/authenticate', user.authenticate);


module.exports = router;
