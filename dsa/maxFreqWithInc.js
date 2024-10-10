let arr = [1, 4, 8, 13];
let n = 4;
let k = 5;

function maxFrequency() {
    arr.sort((a, b) => a - b);
    let start = 0;
    let sum = 0;
    let res = -Infinity;
    for (let i = 0; i < n; i++) {
        sum = sum + arr[i];
        while ((end - start + 1) * arr[i] - sum > k) {
            start++;
            sum = sum - arr[start];
        }
        res = Math.max(res, end - start + 1);
    }
    console.log(res);
}
