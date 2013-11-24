var common_characters = require('./int.common_characters.json');
var common_characters_pinyin = require('./int.common_characters.pinyin.json');

module.exports = function(text) {
  var output = { full: '', abbr: '' };
  output.full = text.replace(/[\u4e00-\u9fa5]+/g, function(characters){
    var pinyins = '', abbrs = '';
    for (var i = 0, l = characters.length; i < l; i++) {
      var pinyin = common_characters_pinyin[common_characters[characters[i].charCodeAt(0)]];
      if (!pinyin) continue;
      pinyins += pinyin;
      abbrs += pinyin[0];
    }
    if (abbrs.length > 1) {
      output.abbr += abbrs + ' ';
    }
    return pinyins;
  });
  output.full = output.full.trim();
  output.abbr = output.abbr.trim();
  return output;
};
