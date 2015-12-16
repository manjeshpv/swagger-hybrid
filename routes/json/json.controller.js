'use strict';

var YAML = require('yamljs');

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}


exports.index = function(req,res,next) {

};

exports.show = function(req,res,next){
  var filename = req.params.filename;
  if(filename){
    var dir='./filebase';

    if(!filename.endsWith("yaml")){
      filename = filename+".yaml"
    }
    var json = YAML.load(dir+'/'+filename);
    res.json(json)
  } else {
    res.json({"Nothing":"Found"})
  }
};
