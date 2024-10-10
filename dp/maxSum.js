// Given an array of ‘N’  positive integers, we need to return the maximum sum of the subsequence such that no two elements of the subsequence are adjacent elements in the array.

let arr = [3, 1, 3, 1, 3, 5, 8, 1, 9]

let dp = new Array(arr.length).fill(-1);

dp[0] = arr[0];
dp[1] = arr[1];

for (let i = 2; i < arr.length; i++) {
    dp[i] = Math.max(arr[i] + dp[i - 2], dp[i - 1]);
}

console.log(dp);
