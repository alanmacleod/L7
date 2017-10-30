
var L7 = require('./main.js');

var buff = "Hello I am a string of data to be compressed. I can be a simple string or an arraybuffer, pass either to the compress() method";

console.log(buff.length);
var c = L7.compress(buff);


var p = (c.length / buff.length).toFixed(2);

console.log(`${c.length} (${p}x)`);


var d = L7.decompress(c);

console.log(d.length,  ": ", d)
