pinyin_index
============

A fast Chinese characters to pinyins conversion/romanization tool for indexing use.

It's much more convenient to type pinyin (especially the pinyin abbreviations) than Chinese characters when you search something.

    npm install pinyin_index

Usage: ``pinyin_index(text[, options])``  
Returns an object by default.  

    var pinyin_index = require('pinyin_index');
    pinyin_index('天生我材必有用，千金散尽还复来。')
    // returns:
    // { full: 'tianshengwocaibiyouyong，qianjinsanjinhuanfulai。',
    //   abbr: 'tswcbyy qjsjhfl' }

### Options

**type** `String`

Defaults to `int` which is faster than `string`.

**output** `Function (pinyin_array, replaced)`

Customize output.

    pinyin_index('天生我材必有用，千金散尽还复来。', {
      output: function(pinyin_array, replaced) {
        return pinyin_array;
      }
    })

returns:

    [ [ 'tian', 'sheng', 'wo', 'cai', 'bi', 'you', 'yong' ],
      [ 'qian', 'jin', 'san', 'jin', 'huan', 'fu', 'lai' ] ]

### Performance

| characters | type: 'string'     | type: 'int'        |
|------------|--------------------|--------------------|
| 1          | 30957.93088538371  | 36193.70387053227  |
| 3          | 22774.639332214894 | 35756.25319353396  |
| 11         | 12717.489952800504 | 33896.05136466831  |
| 29         | 6629.282427042972  | 31086.750626590918 |
| 56         | 3856.200979658138  | 26386.000189447706 |

Measured in ops/sec on a Mac Mini 2012 with 2.3GHz i7 CPU and 16GB RAM.

![benchmark](https://raw.github.com/caiguanhao/pinyin_index/master/test/benchmark.png)

For the best performance, you may fork and simplify this repo to best suit your project.

LICENSE: MIT  
Developer: caiguanhao &lt;caiguanhao@gmail.com&gt;  
