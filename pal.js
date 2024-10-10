function longest(s) {
    let n = s.length;
    let start = 0;
    let end = 1;
    let low;
    let hi;
    console.log(n);
    for (let i = 0; i < n; i++) {
        low = i - 1;
        hi = i;
        while (low >= 0 && hi < n && s[low] === s[hi]) {
            if (hi - low + 1 > end) {
                start = low;
                end = hi - low + 1;
            }
            low--;
            hi++;
        }
        low = i - 1;
        hi = i + 1;
        while (low >= 0 && hi < n && s[low] === s[hi]) {
            if (hi - low + 1 > end) {
                start = low;
                end = hi - low + 1;
            }
            low--;
            hi++;
        }
    }

    console.log(start,end);
}

console.log(longest('forgeeksskeegfor'));
