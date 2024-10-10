function binary(arr, x) {
    let l = 0;
    let r = arr.length - 1;
    while (r >= l) {
        console.log(l, r);
        let mid = l + Math.floor((r - l) / 2);
        console.log(arr[mid]);
        if (x === arr[mid]) {
            return 'found';
        }
        else if (x < arr[mid]) {
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }

    return -1;
}

console.log(binary([1, 2, 13, 34, 56, 67, 78], 13));