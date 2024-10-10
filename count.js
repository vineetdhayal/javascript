let myArr = [1, "2", [3, 4, [5]], function () { }, 8, 9];

function count(arr) {
    let f = 0;
    const y = arr;
    for (let i = 0; i < y.length; i++) {
        if (typeof (y[i]) === 'number') {
            f = f + 1;
        }
        else if (Array.isArray(y[i])) {
            f = f + count(arr[i]);
        }
    }

    return f;
}

console.log(count(myArr));
