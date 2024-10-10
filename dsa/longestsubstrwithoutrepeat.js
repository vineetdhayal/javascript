let str = 'abcba';

// let chars = new Array(256).fill(-1);
// let res = -Infinity;

// for (let i = 0; i < str.length; i++) {
//     let st = Math.max(0, chars[str.charCodeAt(i)]+1);
//     console.log(st);
//     res = Math.max(res, i - st);
//     chars[str.charCodeAt(i)] = i;
// }

// console.log(res);

let chars = {};
let left = 0;
let right = 0;
let distinct = 2;
let res = -Infinity;
while (right < str.length) {
    chars[str[right]] = chars[str[right]] ? chars[str[right]] + 1 : 1;
    if (Object.keys(chars).length > 2) {
        while (Object.keys(chars).length > 2) {
            chars[str[left]]--;
            if (chars[str[left]] === 0) {
                delete chars[str[left]];
            }
            left++;
        }
    }
    if (Object.keys(chars).length === 2 && right - left > res) {
        console.log(left, right);
        res = right - left + 1;
    }
    right++;
}

console.log(res);
