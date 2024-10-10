Array.prototype.myReduce = function (callback, accumulator) {
    console.log(callback, accumulator)
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator ? accumulator : this[i], this[i]);
        console.log(accumulator);
    }

    return accumulator;
}

let x = [1, 2, 3];
y = x.myReduce((acc, curr) => { return curr + acc }, 0)
console.log(y)
