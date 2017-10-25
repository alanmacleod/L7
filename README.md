![L7](https://raw.githubusercontent.com/alanmacleod/L7/master/L7.png?token=ANOXGO1UEBBvLQ1YZSHLifUKWD0i1MLCks5Z-bgUwA%3D%3D)


Lossless LZW codec implementation; fast, small, simple.

This is such an awesome algorithm with an intuitive implementation, good compression and highly versatile. Can use this package to quickly compress data in the browser before sending and unpacking server-side. 

```js
var L7 = require('l7');

var data = "Hello I am a string of data to be compressed. I can be a simple string or an arraybuffer, pass either to the compress() method";

var compressed = L7.compress(data);
```


