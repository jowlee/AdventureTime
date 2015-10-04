'use strict';

var express = require('express');
var user = require('./user.controller');
var config = require('../../config/environment');

var router = express.Router();

router.put('/create', user.create);

router.post('/edit', user.edit);
router.post('/addTag',user.addTag);
router.post('/addEvent',user.addEvent);

router.get('/getName',user.getName);

router.delete('/removeTag',user.removeTag);

module.exports = router;
