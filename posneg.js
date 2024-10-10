let arr = [1, 2, -3, -1, -2, 3];

let newArr = [];

let e = 0;
let o = 1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        newArr[e] = arr[i];
        e = e + 2;
    }
    else {
        newArr[o] = arr[i];
        o = o + 2;
    }
}

console.log(newArr);
