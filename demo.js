
var L7 = require('./main.js');

var buff = "TOBEORNOTTOBEORTOBEORNOT";

console.log(buff.length + ": " + buff);
var c = L7.compress(buff);

console.log(c.length,  ": ", c)

var d = L7.decompress(c);

console.log(d.length,  ": ", d)
