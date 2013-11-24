/* make int js and json files based on string js and json files */

var common_characters = require('../lib/string.common_characters.json').common_characters;
var string_common_characters_index_js = __dirname + '/../lib/string.common_characters.index.js';
var string_common_characters_index = require(string_common_characters_index_js);
var fs = require('fs');

fs.readFile(string_common_characters_index_js, function(err, file) {
  if (err) throw err;

  var pinyins = [];
  file.toString().match(/return '(.+?)';/g).forEach(function(pinyin) {
    pinyins.push(/return '(.+?)';/.exec(pinyin)[1]);
  });

  fs.writeFile(
    __dirname + '/../lib/int.common_characters.pinyin.json',
    JSON.stringify(pinyins, null, 2) + '\n',
    function(err) {
      if (err) throw err;
    }
  );

  var ints = {};
  for (var i = 0, l = common_characters.length; i < l; i++) {
    var pinyin = string_common_characters_index(common_characters[i]).full;
    ints[common_characters[i].charCodeAt(0)] = pinyins.indexOf(pinyin);
  }

  fs.writeFile(
    __dirname + '/../lib/int.common_characters.json',
    JSON.stringify(ints, null, 2) + '\n',
    function(err) {
      if (err) throw err;
    }
  );
});
