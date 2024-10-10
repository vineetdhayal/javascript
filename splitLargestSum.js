let arr = [10, 20, 30, 40];
let k = 2;

function countpartition(arr, mid) {
    let part = 1;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (sum + arr[i] <= mid) {
            sum = sum + arr[i];
        }
        else {
            part = part + 1;
            sum = arr[i];
        }
    }

    return part;
}

function minSum() {
    let low = Math.max(...arr);
    let high = arr.reduce((acc, curr) => acc = acc + curr, 0);

    while (low <= high) {
        console.log(low, high);
        let mid = Math.floor((low + high) / 2);
        let partitions = countpartition(arr, mid);
        if (partitions > k) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    console.log(low);
}
minSum();
