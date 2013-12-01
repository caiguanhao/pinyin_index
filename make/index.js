/* make int js and json files based on string js and json files */

var common_characters = require('../lib/string/common.characters.json').common_characters;
var string_index_js = __dirname + '/../lib/string/index.js';
var string_index = require(string_index_js);
var fs = require('fs');

fs.readFile(string_index_js, function(err, file) {
  if (err) throw err;

  var pinyins = [];
  file.toString().match(/return '(.+?)';/g).forEach(function(pinyin) {
    pinyins.push(/return '(.+?)';/.exec(pinyin)[1]);
  });

  pinyins.sort();

  fs.writeFile(
    __dirname + '/../lib/int/common.pinyins.json',
    JSON.stringify(pinyins, null, 2) + '\n',
    function(err) {
      if (err) throw err;
    }
  );

  var ints = {};
  for (var i = 0, l = common_characters.length; i < l; i++) {
    var pinyin = string_index(common_characters[i]);
    ints[common_characters[i].charCodeAt(0)] = pinyins.indexOf(pinyin);
  }

  fs.writeFile(
    __dirname + '/../lib/int/common.characters.json',
    JSON.stringify(ints, null, 2) + '\n',
    function(err) {
      if (err) throw err;
    }
  );

  var object = {};
  for (var i = 0, l = common_characters.length; i < l; i++) {
    object[common_characters[i]] = pinyins.indexOf(string_index(common_characters[i]));
  }

  fs.writeFile(
    __dirname + '/../lib/object/common.pinyins.json',
    JSON.stringify(pinyins, null, 2) + '\n',
    function(err) {
      if (err) throw err;
    }
  );

  fs.writeFile(
    __dirname + '/../lib/object/common.characters.json',
    JSON.stringify(object, null, 2) + '\n',
    function(err) {
      if (err) throw err;
    }
  );
});
