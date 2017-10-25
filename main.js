
"use strict";

"pretend that we're dead";

const MAX_BASE = 256;

function L7()
{
  this.dict = [];
  this.basecount = MAX_BASE;
}


L7.prototype = {

  reset: function(forCompress)
  {
    this.dict = [];

    if (forCompress)
      for(var t=0; t<this.basecount; t++)
        this.dict[String.fromCharCode(t)] = t;
    else
      for(var t=0; t<this.basecount; t++)
        this.dict[t] = String.fromCharCode(t);

  },

  // One of LZW's strengths is operating on a continuous input stream of
  // indeterminate length. Here, I'm just using a static buffer which frankly
  // does this amazing algorithm a bit of a disservice.
  compress: function(buffer)
  {
    if (typeof buffer == 'string')
      buffer = this._to_ab(buffer);

    this.reset(true);

    var data = new Uint8Array(buffer);
    var w = '', res = [];
    var dsize = 256;

    for (var t=0; t<data.length; t++)
    {
      var c = String.fromCharCode(data[t]);

      var wc = w + c;
      if (this.dict.hasOwnProperty(wc))
      {
        w = wc;
      } else {
        res.push(this.dict[w]);
        this.dict[wc] = dsize++;
        w = String(c);
      }
    }

    if (w != "")
      res.push(this.dict[w]);

    return res;

  },


  decompress: function(buffer)
  {
    this.reset(false);

    var w = String.fromCharCode(buffer[0]);
    var res = w, dsize=256, e, k;

    for (var i=1; i<buffer.length; i++)
    {

      k = buffer[i];

      if (this.dict[k])
      {
        e = this.dict[k];
      } else {
        if (k === dsize)
          e = w + w.charAt(0);
        else
          return null;
      }

      res += e;

      this.dict[dsize++] = w + e.charAt(0);

      w = e;
    }

    return res;
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


module.exports = new L7();
