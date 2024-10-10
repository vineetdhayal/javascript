function add(...args) {
    let sum = args;
    function valueOf(...args1) {
        sum = [...args, ...args1];
        return valueOf;
    }
    valueOf.callMe = function() {
        return sum.reduce((acc, curr) => acc + curr, 0)
    }
    valueOf.value = valueOf.callMe;
    return valueOf;
}

console.log(add(1)(2).value() == 3);
console.log(add(1, 2)(3).value() == 6);
console.log(add(1)(2)(3).value() == 6);
console.log(add(1)(2) + 3);
