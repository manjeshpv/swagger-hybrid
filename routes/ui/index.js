/**
 * Created by ManjeshV on 12/16/2015.
 */

'use strict';

var express = require('express');
var controller = require('./ui.controller');

var router = express.Router();

//router.get('/',controller.index)
router.get('/:filename',controller.show)
//router.post('/', controller.create);
//router.get('/delete/:filename', controller.destroy);

module.exports = router;
