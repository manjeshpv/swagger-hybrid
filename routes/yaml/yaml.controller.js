'use strict';

var fs = require('fs');

exports.index = function(req,res,next){
  var dir='./filebase';
    fs.readdir(dir,function(err,files){
      if (err) throw err;
      res.json(files);
    });
};

exports.show = function(req,res,next) {
  var filename = req.params.filename;
  var dir = './filebase';
  fs.readFile(dir + '/' + filename, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    res.send(JSON.stringify({"yaml": data}));

  });
};

exports.create = function(req, res) {
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

  var body = '';
  var name = req.body.name;
  if(!name.endsWith("yaml")){
    name = name+".yaml"
  }
  var file = JSON.parse(req.body.file);
  console.log("yaml",file.yaml)
  if(file){
    var wstream = fs.createWriteStream('filebase/'+name);
    wstream.write(file.yaml);
    wstream.end();
  }
  res.json({code:200})
}

exports.destroy =  function(req,res,next){
  var filename = req.params.filename;
  console.log(filename)
  var dir='./filebase';
  var data = fs.unlinkSync(dir+'/'+filename)
  res.send(JSON.stringify({"message":data}));
};

