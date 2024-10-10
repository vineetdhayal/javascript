function rgbToHex(r, g, b) {
    // DO NOT REMOVE
    'use strict';
    const p = r.toString(16);
    const q = g.toString(16);
    const s = b.toString(16);
    return '#' + p.length < 2
      ? '0' + p
      : p + q.length < 2
      ? '0' + q
      : q + s.length < 2
      ? '0' + s
      : s;
    // write your code below
  }
  
  console.log(rgbToHex(186, 218, 85));
  