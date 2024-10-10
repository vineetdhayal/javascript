let arr = [1, 2, 3, 3, 3, 3, 10];

function majority(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] && count >= arr.length / 2) {
            return arr[i];
        }
        else if (arr[i] === arr[i - 1]) {
            count++;
        }
        else {
            count = 1;
        }
    }
}

console.log(majority(arr));