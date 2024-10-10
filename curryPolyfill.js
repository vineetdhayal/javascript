function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        }

        return (...arg) => arg.length === 0 ? curried.apply(this, args) : curried.apply(this, [...args, ...arg])
    }
}

function add(a, b, c) {
    return a + b+c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(3)()()(9, 8));
console.log(curriedAdd(3)(9, 8))
console.log(curriedAdd(3)(13)(9))
const curriedAddOne = curriedAdd(3);
const curriedAddTwo = curriedAddOne(4)(6);

console.log(curriedAddTwo);
