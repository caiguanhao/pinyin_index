var assert = require('assert');

var pinyin_index = require('../');

assert.deepEqual(
  pinyin_index('天生我材必有用，千金散尽还复来。'),
  {
    full: 'tianshengwocaibiyouyong，qianjinsanjinhuanfulai。',
    abbr: 'tswcbyy qjsjhfl'
  }
);
