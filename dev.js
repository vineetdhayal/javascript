
const curry = (fn) => {
    // write your solution here
    return function curried (...args) {
      console.log(fn.length, args);
      if(fn.length<=args.length) {
        return fn(...args);
      }
      return (...arg) => {
        console.log('arg', arg);
       return curried.apply(this, [...args,...arg])
        };
    }
  };
  const add = (a, b, c, d, e) => {
    return a + b + c + d + e;
};

const curriedAdd = curry(add);

curriedAdd(1,2,3,4,5); // returns 15;
curriedAdd(1)(2,3,4,5); // returns 15;
curriedAdd(1,2)(3,4,5); // returns 15;
curriedAdd(1,2,3,4)(5); // returns 15;