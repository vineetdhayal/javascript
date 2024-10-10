let dp = Array(4).fill(-1);
let arr = [10, 20, 30, 10];
dp[0] = 0;
dp[1] = 10;
let k = 4;

for (let n = 2; n < 4; n++) {
    let min = 1000000;
    let allowed = Math.min(n, k);
    for (let p = 1; p <= allowed; p++) {
        dp[n] = Math.min(dp[n - p] + Math.abs(arr[n] - arr[n - p]), min);
    }
}

console.log(dp);
