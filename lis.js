function LCS(arr) {
    let dp = new Array(arr.length).fill(1);
    const seq = [...Array(arr.length).keys()]
    console.log(seq);

    for (let k = 1; k < arr.length; k++) {
        console.log('seq', seq);
        for (let j = 0; j < k; j++) {
            if (arr[k] > arr[j] && dp[j] + 1 > dp[k]) {
                dp[k] = dp[j] + 1;
                seq[k] = j;
            }
        }
    }

    let ans = -1;
    for (let x = 0; x < dp.length; x++) {
        if (ans < dp[x]) {
            ans = dp[x];
        }
    }
    const res = [];
    res.push(arr[ans]);
    console.log(dp, seq, ans)
}

let arr = [50, 3, 10, 7, 40, 80];

LCS(arr);
