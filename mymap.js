Array.prototype.myMap = function (cb) {
    return this.reduce((acc, val) => acc = acc.concat(cb(val)), []);
}

Array.prototype.myReduce = function (cb, initial) {
    let acc = initial;
    for (let i = 0; i < this.length; i++) {
        acc = cb(acc, this[i]);
    }

    return acc;
}

let arr = [1, 2, 3, 4];

let x = arr.map((y) => y * 4);

let p = arr.myReduce((acc, curr) => {
    acc = acc.concat(curr * 2);

    return acc;
}, [])

console.log(p);
