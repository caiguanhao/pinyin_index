pinyin_index
============

A fast Chinese characters to pinyins conversion/romanization tool for indexing use.

    var pinyin_index = require('pinyin_index');
    pinyin_index('天生我材必有用，千金散尽还复来。')
    // => 
    // { full: 'tianshengwocaibiyouyong，qianjinsanjinhuanfulai。',
    //   abbr: 'tswcbyy qjsjhfl' }

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

LICENSE: MIT  
Developer: caiguanhao &lt;caiguanhao@gmail.com&gt;  
