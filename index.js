/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = {
  port: process.env.PORT ||"5000"
}
// Setup server
var app = express();
var http =require('http');
http.globalAgent.maxSockets = 5000;
var server = http.createServer(app);
require('./express')(app);
require('./routes')(app);
require('./errors')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
module.exports = app;
