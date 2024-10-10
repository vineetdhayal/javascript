let arr = [2, 1, 5, 4, 3, 0, 0];
let ind = -1;
for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
        ind = i;
        break;
    }
}
if (ind === -1) {
    arr.reverse();
    return arr;
}
for (let k = arr.length - 2; k >= 0; k--) {
    if (arr[k] > arr[ind]) {
        [arr[k], arr[ind]] = [arr[ind], arr[k]];
        break;
    }
}

console.log(arr.slice(0, ind+1).concat(arr.slice(ind + 1).reverse()));