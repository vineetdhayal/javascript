const triangle = [
    [1],
    [2, 3],
    [3, 6, 7],
    [8, 9, 6, 10]
];

let n = 4;

let dp = Array.from({ length: n }, () => Array(n).fill(0));
console.log(dp);

dp[0][0] = triangle[0][0];

for (let i = 1; i < n; i++) {
    for (let y = 0; y < triangle[i].length; y++) {
        if (y === 0) {
            dp[i][y] = triangle[i][y] + dp[i - 1][0];
        }
        else {
            dp[i][y] = triangle[i][y] + Math.min(dp[i][y - 1], dp[i - 1][y - 1]);
        }
    }
}

console.log(dp);
