const strings = ["a", "ab", ["abcd", "derfg", ["asdasd", "DGdgdfsg", "asdgsdfhsdhf", "sdafsafsadfsadfsdfsadf"], "sdfsdfsd", "asdfsaf"], "sdafasdf", "sdfsadf", "sadfsafsd"]

let ans = '';

function longest(str) {
    for (let i = 0; i < str.length; i++) {
        if (typeof str[i] === 'string') {
            if (str[i].length > ans.length) {
                ans = str[i];
            }
        }
        else if (Array.isArray(str[i])) {
            ans = ans.length > (longest(str[i])) ? ans : longest(str[i]);
        }
    }

    return ans;
}

console.log(longest(strings));
