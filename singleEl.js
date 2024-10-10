let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];

function findSingleElement() {
    let low = 1;
    let high = arr.length - 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) {
            return mid;
        }
        else if ((mid % 2 === 1 && arr[mid - 1] === arr[mid]) && (mid % 2 === 0 && arr[mid + 1] === arr[mid])) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}

console.log(findSingleElement())
