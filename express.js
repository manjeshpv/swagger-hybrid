/**
 * Created by ManjeshV on 12/16/2015.
 */
var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = function(app){
  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  // Static Serve Swagger UI
  app.use('/ui', express.static(path.join(__dirname, 'swagger-ui/dist')));

  // Static files created for override
  app.use('/local', express.static(path.join(__dirname, 'public')));

  // Overriding some files to customize
  app.use(express.static(path.join(__dirname, 'local-overrides/dist')));
  app.use(express.static(path.join(__dirname, 'swagger-editor/dist')));

}
