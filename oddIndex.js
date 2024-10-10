let arr = [1, 2, 3, 4, 5, 6];

let arr1 = [];

let o = 0;
let e = 1;

for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 2 !== 0) {
        arr1[o] = arr[i];
        o=o+2;
    }
    else {
        arr1[e] = arr[i];
        e=e+2;
    }
}

console.log(arr1);
