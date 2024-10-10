const arr = [0, 1, 1, 0, 1, 2, 1, 0, 2];


let f = 0;
let s = 0;
let t = arr.length - 1;

while (s <= t) {
    if (arr[s] === 0) {
        [arr[f], arr[s]] = [arr[s], arr[f]];
        s++;
        f++;
    }
    else if (arr[s] === 1) {
        s++;
    }
    else if (arr[s] === 2) {
        [arr[s], arr[t]] = [arr[t], arr[s]];
        t--;
    }
}

console.log(arr);
