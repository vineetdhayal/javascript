let arr = [10, 9, 7, 17, 12, 19, 4, 20, 21, 14];

let e = 0;
let o = 1;

function evenOdd() {
    while (e < arr.length && o < arr.length) {
        console.log(e,o);
        if (arr[e] % 2 === 0 && e % 2 === 0) {
            e = e + 2;
        }
        if (arr[o] % 2 !== 0 && o % 2 !== 0) {
            o = o + 2;
        }
        if ((arr[e] % 2 !== 0 && e % 2 === 0) && (arr[o] % 2 === 0 && o % 2 !== 0)) {
            [arr[e], arr[o]] = [arr[o], arr[e]];
            e = e + 2;
            o = o + 2;
        }
    }
}
evenOdd();
console.log(arr);
