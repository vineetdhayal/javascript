const input = '(1,2,3),(4,5,6),(7,8,9)';

const tuple = (input) => {
    let arr = [];
    let curr = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== '(' && input[i] !== ',' && input[i] !== ')') {
            curr.push(input[i]);
        }
        else if (input[i] === ')') {
            arr.push(curr);
            curr = [];
        }
    }
    return arr;
}

Array.prototype.multiply = function (value) {
    let ans = 1;
    this.forEach((x) => ans = ans * x[value - 1]);
    return ans;
}

console.log(tuple(input).multiply(2));
