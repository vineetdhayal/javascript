"use strict";

let foo = {
  barX: function () {
    console.log(this);
  },
  barY: () => {
    console.log(this);
  },
};

let barX = foo.barX;
let barY = foo.barY;

foo.barX(); // Output1?
foo.barY(); // Output2?
barX(); // Output3?
barY(); // Output4?