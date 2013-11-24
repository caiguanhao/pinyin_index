exports = module.exports = function(text, options) {
  options = options || {};

  var index;

  if (options.type === 'string') {
    index = require('../lib/string.common_characters.index');
  } else {
    index = require('../lib/int.common_characters.index');
  }

  var output = { full: '', abbr: '' };

  output.full = text.replace(/[\u4e00-\u9fa5]+/g, function(characters){
    var pinyins = '', abbrs = '';

    for (var i = 0, l = characters.length; i < l; i++) {
      var pinyin = index(characters[i]);
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
