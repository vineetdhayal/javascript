let rows = 7;
let cols = 3;
let dp = Array.from({ length: rows }, () => new Array(cols).fill(-1));

for (let i = 0; i < dp[0].length; i++) {
    if (i === 0) {
        dp[0][i] = 0;
    }
    else {
        dp[0][i] = 1;
    }
}

console.log(dp);

for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
        if (j === 0) {
            dp[i][j] = 1;
        }
        else {
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
        }
    }
}

console.log(dp);
