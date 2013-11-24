var common_characters = require('./int.common_characters.json');
var common_characters_pinyin = require('./int.common_characters.pinyin.json');

module.exports = function(text) {
  return common_characters_pinyin[common_characters[text.charCodeAt(0)]];
};
