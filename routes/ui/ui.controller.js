'use strict';

var YAML = require('yamljs');

exports.index = function(req,res,next) {

};

exports.show = function(req,res,next){
  var filename = req.params.filename;
  res.render('ui',{
    filenamex:req.params.filename
  });
};
