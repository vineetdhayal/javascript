function repeat(str, count) {
    let currStr = str;
    let ans = str;
    while (count > 0) {
        console.log('result', ans, currStr);
        if (count === 1) {
            console.log('came');
            ans = ans + currStr;
        }
        currStr = currStr.concat(currStr);
        count = Math.floor(count / 2);
    }
    return ans;
}

console.log(repeat('abc', 5));
