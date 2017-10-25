
"use strict";

"pretend that we're dead";


module.exports = L7;
const MAX_BASE = 256;


function L7()
{
  this.dict = [];
  this.basecount = MAX_BASE;
}


L7.prototype = {

  reset: function()
  {
    this.dict = [];

    for(var t=0; t<this.basecount; t++)
      this.dict[String.fromCharCode(t)] = t;


  },

  // One of LZW's strengths is operating on a continuous input stream of
  // indeterminate length. Here, I'm just using a static buffer which frankly
  // does this amazing algorithm a bit of a disservice.
  compress: function(buffer)
  {
    if (typeof buffer == 'string')
      buffer = this._to_ab(buffer);

    this.reset();

    var data = new Uint8Array(buffer);
    console.log(this.dict);


  },

  _to_ab: function(str)
  {
    var buf = new ArrayBuffer(str.length); // 2 bytes for each char
    var bufView = new Uint8Array(buf);
    for (var i=0, l=str.length; i < l; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }

};
