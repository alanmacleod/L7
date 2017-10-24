
'use strict';

module.exports = L7;


function L7()
{
  this.dict = [];
}


L7.prototype = {
  
  reset: function()
  {
    this.dict = [];
    for (var t=0; t<255; t++)
    {
      this.dict[t] = t;
    }
  }

};
