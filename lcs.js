function LCSubsStr(x, y, m, n) {
    let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
    let result = 0;
    let ans = '';
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            }
            else if (x[i - 1] === y[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
                result = Math.max(result, dp[i][j]);
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return {len:dp[m][n], ans};
}

var X = "OldSite:GeeksforGeeks.org";
var Y = "NewSite:GeeksQuiz.com";
console.log(LCSubsStr(X, Y, X.length, Y.length));
