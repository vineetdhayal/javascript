function minimum(s) {
    let ans = '';
    let i = 0;
    let cur = 1;
    let dc = 0;
    while (i < s.length) {
        let ch = s[i];
        if (i === 0 && ch === 'I') {
            ans += cur;
            cur++;
        }
        if (ch === 'D') {
            dc++;
        }
        let j = i + 1;
        while (j < s.length && s[j] === 'D') {
            dc++;
            j++;
        }
        let k = dc;
        while (dc >= 0) {
            console.log('came here')
            ans += cur + dc;
            dc--;
        }
        cur += k + 1;
        dc = 0;
        i = j;
        console.log('ans', ans);
    }

    console.log(ans);
}

console.log(minimum('IIDIDDD'));
