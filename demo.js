
var L7 = require('./main.js');

var c = new L7();


var buff = "TOBEORNOTTOBEORTOBEORNOT";

console.log(buff.length + ": " + buff);
var r = c.compress(buff);

console.log(r.length,  ": ", r)
