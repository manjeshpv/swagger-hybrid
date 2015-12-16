/**
 * Created by ManjeshV on 12/16/2015.
 */

'use strict';

var express = require('express');
var controller = require('./yaml.controller');

var router = express.Router();

router.get('/',controller.index)
router.get('/:filename',controller.show)
router.post('/', controller.create);
//router.post('/login',  passport.authenticate('local', { failureRedirect: '/api/authenticate/profile' }), controller.login);
//router.get('/profile', isLoggedIn,controller.profile);
//router.get('/signup', controller.signup);
router.get('/delete/:filename', controller.destroy);

module.exports = router;
