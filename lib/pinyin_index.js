exports = module.exports = function(text, options) {
  options = options || {};

  var convert_hanzi_to_pinyin;

  if (options.type === 'string') {
    convert_hanzi_to_pinyin = require('../lib/string.common_characters.index');
  } else {
    convert_hanzi_to_pinyin = require('../lib/int.common_characters.index');
  }

  var replaced = { full: '', abbr: '' };
  var pinyin_array = [];

  replaced.full = text.replace(/[\u4e00-\u9fa5]+/g, function(characters) {
    var pinyins = '', abbrs = '';
    var array = [];

    for (var i = 0, l = characters.length; i < l; i++) {
      var pinyin = convert_hanzi_to_pinyin(characters[i]);
      if (!pinyin) continue;
      pinyins += pinyin;
      abbrs += pinyin[0];
      array.push(pinyin);
    }

    if (abbrs.length > 1) {
      replaced.abbr += abbrs + ' ';
    }

    pinyin_array.push(array);

    return pinyins;
  });

  replaced.full = replaced.full.trim();
  replaced.abbr = replaced.abbr.trim();

  var output = options.output || default_output;

  return output(pinyin_array, replaced);
};

function default_output(pinyin_array, replaced) {
  return replaced;
}
