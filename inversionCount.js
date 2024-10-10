function mergeAndCount(arr, l, m, r) {
    let left = [];
    for (let i = l; i < m + 1; i++) {
        left.push(arr[i]);
    }
    let right = [];
    for (let j = m + 1; j < r; j++) {
        right.push(arr[r]);
    }
    let i = 0;
    let j = 0;
    let k = l;
    let swaps = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        }
        else {
            arr[k++] = right[j++];
            swaps += m + 1 - l - i;
        }
    }
    return swaps;
}

function mergeSortAndCount(arr, l, r) {
    let count = 0;
    while (l < r) {
        let m = Math.floor((l + r) / 2);
        count += mergeSortAndCount(arr, l, m);
        count += mergeSortAndCount(arr, m + 1, r);
        count += mergeAndCount(arr, l, m, r);
    }
    return r;
}
