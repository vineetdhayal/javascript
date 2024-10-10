// map using fo each
Array.prototype.myMap = function (callback) {
    // console.log(callback, this);
    return this.reduce(function(acc, curr) {
        // console.log(curr, acc);
        console.log(acc);
        acc = acc.concat(callback(curr));
        return acc;
    }, [])
}

const z = [1, 3, 5].myMap((val) => val * 3);

console.log(z);
