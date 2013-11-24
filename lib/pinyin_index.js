exports = module.exports = function(text, options) {
  options = options || {};
  if (options.type === 'string') {
    var string_common_characters_index = require('../lib/string.common_characters.index');
    return string_common_characters_index(text);
  } else {
    var int_common_characters_index = require('../lib/int.common_characters.index');
    return int_common_characters_index(text);
  }
};
