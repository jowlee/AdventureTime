'use strict';

var express = require('express');
var user = require('./user.controller');
var config = require('../../config/environment');

var router = express.Router();

router.put('/create', user.create);

module.exports = router;
