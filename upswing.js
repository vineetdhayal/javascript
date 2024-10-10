// console.log("stack [1]");

// setTimeout(() => console.log("macro [2]"), 0);

// setTimeout(() => console.log("macro [3]"), 0);

// const p = Promise.resolve(console.log('56'));

// for (let i = 0; i < 3; i++) {
//   p.then(() => {
//     setTimeout(() => {
//       console.log("macro [4]");

//       setTimeout(() => console.log("macro [5]"), 0);

//       p.then(() => console.log("micro [6]"));
//     }, 0);

//     console.log("micro [7]");
//   });
// }

// console.log("stack [8]");


// // question 2

// let num = 0;

// async function increment() { num += await 2; console.log(num); }

// increment(); num += 1;

// console.log(num);


// // question 3

// function processing() {
//   return new Promise((resolve, reject) => {
//     resolve(1);
//     reject("Failed");
//     resolve(2);
//   });
// }

// function init() {
//   processing()
//     .then((v) => console.log(v + 1))
//     .catch((err) => console.log(err));
// }

// init();

// question 4
// var firstname = computeName();

// let name = "Yomesh";

// function computeName() {
//   return `${name} Gupta`;
// }

// console.log(firstname);

// question 5
const first = 2 in [1, 2];
const second = '2' in [0, 1, 2];

console.log(first, second);
