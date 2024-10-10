let s = "ADOBECODEBANC";
let t = "ABC";

function minLength(input, find) {
    let mp = new Map();
    let mp1 = new Map();
    for (let k = 0; k < find.length; k++) {
        mp[find[k]] = mp[find[k]] ? mp[find[k]] + 1 : 1;
    }
    let totalChars = find.length;
    let start = 0;
    let min = Infinity;
    for (let i = 0; i < input.length; i++) {
        mp1[input[i]] = mp1[input[i]] ? mp1[input[i]] + 1 : 1;
        console.log(mp, mp1);
        if (mp[input[i]] && (mp1[input[i]] >= mp[input[i]]) && totalChars !== 0) {
            totalChars--;
        }
        console.log('total', totalChars);
        if (totalChars === 0) {
            while (mp1[input[start]] > mp[input[start]] || mp[input[start]] === 0) {
                if (mp1[input[start]] > mp[input[start]]) {
                    mp1[input[start]]--;
                }
                start++;
            }
        }
        console.log(i, start);
        if (i - start < min) {
            min = i - start;
        }
    }
}
minLength(s, t);
