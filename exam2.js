let input = {
    A: (a, b, c) => a + b + c,
    B: (a, b, c) => a - b + c,
    C: (a, b, c) => a - b - c,
    D: { E: (a, b, c) => a + b + c }
}

function compute(a, b, c, input) {
    let newObj = {};
    for (let keys in input) {
        console.log(keys, input[keys], typeof input[keys]);
        if (typeof input[keys] !== 'object') {
            newObj[keys] = input[keys](a, b, c);
        }
        else {
            newObj[keys] = compute(a, b, c, input[keys]);
        }
    }
    return newObj;
}

console.log(compute(1, 2, 3, input));