var pinyin_index = require('../');

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var types = [ 'int', 'string' ];

var total_time = 0;

var poems = [ '张', '相公', '出镇荆州寻除太子', '詹事余时流夜郎行至江夏与张公相去千里', '公因太府丞王昔使车寄罗衣二事及五月五日赠余诗余答以此诗' ];
var poem = '';

for (var i = 0; i < poems.length; i++) {
  poem += poems[i];
  for (var j = 0; j < types.length; j++) {
    suite.add(
      JSON.stringify({ type: types[j], length: poem.length }),
      function(text, type) {
        return function() {
          pinyin_index(text, { type: type });
        };
      }(poem, types[j])
    );
  }
}

var results = {};

suite.on('cycle', function(event) {
  console.log(String(event.target));
  var name = JSON.parse(event.target.name);
  results[name.type] = results[name.type] || {};
  results[name.type][name.length] = event.target.hz;
  total_time += event.target.times.elapsed;
});

suite.on('complete', function() {
  console.log('Time used ' + total_time + ' seconds.');
  console.log(results);
});

suite.run({ 'async': true });
