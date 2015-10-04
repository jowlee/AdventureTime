'use strict';

var express = require('express');
var user = require('./user.controller');
var config = require('../../config/environment');

var router = express.Router();

router.put('/create', user.create);

router.post('/edit', user.edit);
router.post('/addTag',user.addTag);

router.delete('/removeTag',user.removeTag);

module.exports = router;
