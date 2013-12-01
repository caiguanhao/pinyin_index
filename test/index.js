var assert = require('assert');

var pinyin_index = require('../');

assert.deepEqual(
  pinyin_index('天生我材必有用，千金散尽还复来。'),
  {
    full: 'tianshengwocaibiyouyong，qianjinsanjinhuanfulai。',
    abbr: 'tswcbyy qjsjhfl'
  },
  'Int method should work properly.'
);

assert.deepEqual(
  pinyin_index('天生我材必有用，千金散尽还复来。', { type: 'string' }),
  {
    full: 'tianshengwocaibiyouyong，qianjinsanjinhuanfulai。',
    abbr: 'tswcbyy qjsjhfl'
  },
  'String method should work properly.'
);

assert.deepEqual(
  pinyin_index('天生我材必有用，千金散尽还复来。', { type: 'object' }),
  {
    full: 'tianshengwocaibiyouyong，qianjinsanjinhuanfulai。',
    abbr: 'tswcbyy qjsjhfl'
  },
  'Object method should work properly.'
);

assert.deepEqual(
  pinyin_index('犇猋骉蟲麤毳淼掱焱垚'),
  {
    full: '',
    abbr: ''
  },
  'Uncommon characters should return nothing.'
);

assert.deepEqual(
  pinyin_index('天生我材必有用，千金散尽还复来。', {
    output: function(pinyin_array, replaced) {
      return pinyin_array;
    }
  }),
  [
    [ 'tian', 'sheng', 'wo', 'cai', 'bi', 'you', 'yong' ],
    [ 'qian', 'jin', 'san', 'jin', 'huan', 'fu', 'lai' ]
  ],
  'Custom output should return customized results.'
);
