function init() {
    throw new Error("I am an error");
    return Promise.resolve(1);
}

init()
    .then((v) => console.log(v + 1))
    .catch((err) => console.log("Error caught -- ", err));


//     Option 3 (Uncaught Erro: I am an error) would be the right answer because errors are caught by the catch block only when there are part of the promise chain. In the current code snippet, error thrown at line no. 2 is outside the promise chain as the chain is initiated at line no 3. If it would have been like --

// function first() {
//   return Promise.resolve(1);
// }

// function init() {
//   return first()
//     .then(v => {
//       throw new Error("I am an error");
//     })
//     .catch((err) => console.log("Error caught -- ", err));
// }

// init();