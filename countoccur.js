let arr = [2, 2, 3, 3, 3, 3, 4];
let x = 3;

function left(arr, x, low, high) {
    let first = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === x) {
            first = mid;
            high = mid - 1;
        }
        else if (arr[mid] < x) {
            low = mid + 1;
        }
        else if (arr[mid] > x) {
            high = mid - 1;
        }
    }
    return first;
}

function right(arr, x, low, high) {
    let first = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === x) {
            first = mid;
            low = mid + 1;
        }
        else if (arr[mid] < x) {
            low = mid + 1;
        }
        else if (arr[mid] > x) {
            high = mid - 1;
        }
    }
    return first;
}

let low = 0;
let high = arr.length - 1;
count(arr, x, low, high);