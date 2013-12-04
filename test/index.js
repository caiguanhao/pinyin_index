var assert = require('assert');
var pinyin_index = require('../');
var types = [ 'int', 'string', 'object' ];
var count = { yes: 0, no: 0 };

function assert_deep_equal(actual, expected, message) {
  try {
    assert.deepEqual(actual, expected);
    process.stdout.write('\x1B[92m' + '✔ ' + message + '\x1B[39m' + '\n');
    count.yes += 1;
  } catch (error) {
    process.stderr.write('\x1B[91m' + '✘ ' + message + '\x1B[39m' + '\n');
    count.no += 1;
  }
}

assert_deep_equal(
  pinyin_index('天生我材必有用，千金散尽还复来。'),
  {
    full: 'tianshengwocaibiyouyong，qianjinsanjinhuanfulai。',
    abbr: 'tswcbyy qjsjhfl'
  },
  'Basic conversion should work properly if no options specified.'
);

for (var i = 0; i < types.length; i++) {
  assert_deep_equal(
    pinyin_index('天生我材必有用，千金散尽还复来。', { type: types[i] }),
    {
      full: 'tianshengwocaibiyouyong，qianjinsanjinhuanfulai。',
      abbr: 'tswcbyy qjsjhfl'
    },
    'Basic conversion should work properly in ' + types[i] + ' mode.'
  );
}

for (var i = 0; i < types.length; i++) {
  assert_deep_equal(
    pinyin_index('犇猋骉蟲麤毳淼掱焱垚', { type: types[i] }),
    {
      full: '',
      abbr: ''
    },
    'Uncommon characters should return nothing in ' + types[i] + ' mode.'
  );
}

for (var i = 0; i < types.length; i++) {
  assert_deep_equal(
    pinyin_index('天生我材必有用，千金散尽还复来。', {
      type: types[i],
      output: function(pinyin_array, replaced) {
        return pinyin_array;
      }
    }),
    [
      [ 'tian', 'sheng', 'wo', 'cai', 'bi', 'you', 'yong' ],
      [ 'qian', 'jin', 'san', 'jin', 'huan', 'fu', 'lai' ]
    ],
    'Custom output should return customized results in ' + types[i] + ' mode.'
  );
}

process.stdout.write('\n');
if (count.no === 0) {
  process.stdout.write('All ');
}
process.stdout.write(count.yes + ' tests were passed.' + '\n');
if (count.no > 0) {
  process.stderr.write(count.no + ' tests were failed.' + '\n');
}
process.exit(count.no);
