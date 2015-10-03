'use strict';

var express = require('express');
var controller = require('./event.controller');
var config = require('../../config/environment');

var router = express.Router();

router.put('/create', controller.create);


module.exports = router;
