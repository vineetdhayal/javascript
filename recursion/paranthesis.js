var generateParenthesis = function (n) {
    let str = [];

    function iterate(mystr, left, right) {
        if (left > n || right > n || right > left) {
            return;
        }
        if (mystr.length && mystr.length === n * 2 && left === right) {
            str.push(mystr);
            return;
        }
        iterate(mystr + '(', left + 1, right);
        iterate(mystr + ')', left, right + 1)
    }

    iterate('', 0, 0);
    return str;
}

console.log(generateParenthesis(30));
