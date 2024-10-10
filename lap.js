function lengthOfLongestAP(arr, n) {
    if (n <= 2) {
        return n;
    }
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n);
    }
    for (let x = 0; x < n - 1; x++) {
        dp[x][n - 1] = 2;
    }
    let llap = 2;
    for (let m = n - 2; m >= 1; m--) {
        let p = m - 1;
        let q = m + 1;
        while (p >= 0 && q <= n - 1) {
            if (arr[p] + arr[q] < 2 * arr[m]) {
                q++;
            }
            else if (arr[p] + arr[q] > 2 * arr[m]) {
                dp[p][m] = 2;
                p--;
            }
            else {
                dp[p][m] = dp[m][q] + 1;
                llap = Math.max(dp[p][m], llap);
                p--;
                q++;
            }
        }
        while (p >= 0) {
            dp[p][m] = 2;
            p--;
        }
    }
    return llap;
}

let arr = [1, 7, 10, 13, 14, 19];
console.log(lengthOfLongestAP(arr, 6));
