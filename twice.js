const onlyTwice = function (fn) {
    let count = 1;
    let sum1;
    let sum2;
    return function (...args) {
        if (count === 1) {
            sum1 = args.reduce((acc, curr) => acc = acc + curr, 0);
            count++;
            return sum1;
        }
        if (count === 2) {
            sum2 = args.reduce((acc, curr) => acc = acc + curr, 0);
            count++;
            return sum2;
        }
        if (count % 2 === 1) {
            count++;
            return sum1;
        }
        else {
            count++;
            return sum2;
        }
    }
}

const addTwoNumbers = (a, b) => a + b
const myFancyAdd = onlyTwice(addTwoNumbers)

console.log(myFancyAdd(2, 3)) // 5
console.log(myFancyAdd(1, 2)) // 3
console.log(myFancyAdd(3, 4)) // 5
console.log(myFancyAdd(3, 7)) // 3
console.log(myFancyAdd(3, 4)) // 5
console.log(myFancyAdd(3, 7)) // 3
console.log(myFancyAdd(3, 4)) // 5
console.log(myFancyAdd(3, 7)) // 3
console.log(myFancyAdd(3, 4)) // 5
console.log(myFancyAdd(3, 7)) // 3
