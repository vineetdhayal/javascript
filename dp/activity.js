let arr = [[10, 40, 70], [20, 50, 80], [30, 60, 90]];

let dp = [-1, -1, -1];

for (let i = 0; i < arr.length; i++) {
    dp[i] = arr[0][i];
}

console.log(dp);

for (let i = 1; i < arr.length; i++) {
    let newArr = [];
    for (let j = 0; j < arr[i].length; j++) {
        if (j === 0) {
            newArr[j] = arr[i][j] + Math.max(dp[1], dp[2]);
        }
        if (j === 1) {
            newArr[j] = arr[i][j] + Math.max(dp[0], dp[2]);
        }
        if (j === 2) {
            newArr[j] = arr[i][j] + Math.max(dp[0], dp[1]);
        }
    }
    dp = newArr;
    console.log(dp);
}
