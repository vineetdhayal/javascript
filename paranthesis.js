function swapCount(s) {
    let stk = [];
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[') {
            stk.push('[');
        }
        else {
            if (stk.length > 0) {
                stk.pop();
            }
            else {
                ans = ans + 1;
            }
        }
    }
    ans = ans + stk.length;
    return ans;
}

let s = '[]][][';

console.log(swapCount(s));
