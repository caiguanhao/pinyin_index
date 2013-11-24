var common_characters = require('./common.characters.json');
var common_pinyins = require('./common.pinyins.json');

module.exports = function(text) {
  return common_pinyins[common_characters[text.charCodeAt(0)]];
};
