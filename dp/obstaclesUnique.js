let rows = 3;
let cols = 3;

let dp = Array.from({ length: rows }, () => new Array(cols).fill(-1));
let maze = [[0, 0, 0], [0, -1, 0], [0, 0, 0]];

dp[0][0] = maze[0][0] === -1 ? -1 : 1;

for (let i = 1; i < cols; i++) {
    dp[0][i] = maze[0][i - 1] === -1 ? -1 : 1;
}

for (let i = 1; i < rows; i++) {
    dp[i][0] = maze[i - 1][0] || maze[i][0] === -1 ? -1 : 1;
}

for (let i = 1; i < rows; i++) {
    for (let j = 1; j < rows; j++) {
        if (maze[i][j] === -1) {
            dp[i][j] = -1;
        }
        else if (dp[i - 1][j] === -1 && dp[i][j - 1] !== -1) {
            dp[i][j] = dp[i][j - 1];
        }
        else if (dp[i - 1][j] !== -1 && dp[i][j - 1] === -1) {
            dp[i][j] = dp[i - 1][j];
        }
        else if (dp[i - 1][j] !== -1 && dp[i][j - 1] !== -1) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
}
console.log(dp);
