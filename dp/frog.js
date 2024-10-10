let dp = Array(4).fill(-1);
let arr = [10, 20, 30, 10];
dp[0] = 0;
dp[1] = 10;

for (let n = 2; n < 4; n++) {
    dp[n] = Math.min(dp[n - 2] + Math.abs(arr[n] - arr[n - 2]), dp[n - 1] + Math.abs(arr[n - 2] - arr[n - 1]));
}

console.log(dp);
