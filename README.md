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

Defaults to `int` which is faster than `object` and `string`.

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

| characters | type: 'string'     | type: 'int'        | type: 'object'     |
|------------|--------------------|--------------------|--------------------|
| 1          | 31307.86224951504  | 36648.64509625492  | 36067.39500122621  |
| 3          | 22936.36905787651  | 35667.96842996375  | 34737.647055291236 |
| 11         | 13073.02230593291  | 34175.55472518443  | 32309.680108541415 |
| 29         | 6779.110855101335  | 31194.03650992541  | 27748.817744451426 |
| 56         | 3893.5136126283214 | 26491.34070818486  | 22105.796098194653 |

Measured in ops/sec on a Mac Mini 2012 with 2.3GHz i7 CPU and 16GB RAM.

![benchmark](https://raw.github.com/caiguanhao/pinyin_index/master/test/benchmark.png)

For the best performance, you may fork and simplify this repo to best suit your project.

LICENSE: MIT  
Developer: caiguanhao &lt;caiguanhao@gmail.com&gt;  
