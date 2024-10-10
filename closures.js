(function (x) {
  return (function (y) {
    console.log(x, y);
  })(3)
})(2);

// function createBase(x) {
//     return function addSix(y) {
//        console.log(x+y);
//     }
// }

// for(var i=0;i<3;i++) {
//     function closureFn(i) {
//         setTimeout(function log(){
//             console.log(i);
//         }, 1000)
//     }
//     closureFn(i);
// }


// for(var i=0;i<3;i++) {
//    setTimeout(() => {console.log(i)}, 1000);
// }

for (var i = 0; i < 3; i++) {
  setTimeout(() => { console.log(i), 500000 });
  // function callMe(i) {
  //   setTimeout(() => { console.log(i), 100000 });
  // }
  // callMe(i)
}
