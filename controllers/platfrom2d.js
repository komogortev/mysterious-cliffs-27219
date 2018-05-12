//@todo move index in config rename to router
var express = require('express');
var router = express.Router();

//console
var prompt = require('prompt');


//set routes
var home = require('./home');
var users = require('./users');
var contact = require('./contact');
var contact = require('./platform2d');


router.use('/', home);
router.use('/home', home);

router.use('/users', users);

router.use('/contact', contact);

router.use('/platform2d', platform2d);


module.exports = router;
