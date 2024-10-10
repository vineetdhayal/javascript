// For example the order string is "abcd", which means "a" can't appear at any position after "b", "c" and "d" in the text, "b" can't appear at any position after "c" and "d" in the text and "c" can't appear at any position after "d" in the text. if the text is "axubbxcxbxd", then the text didn't follow the rule, since "b" appears after "c" in substring "cxb".

// Follow up was that , if string was big. and how to handle is there incoming stream of characters.

// isValid(string pattern, string tomatch)

function find(str, match) {
    let index = 0;
    let pattern = {};
    for (let i = 0; i < str.length; i++) {
        pattern[str[i]] = i;
    }
    let prevIndex = -1;
    for (let j = 0; j < match.length; j++) {
        if (!pattern[match[j]]) {
            continue;
        }
        let currIndex = pattern[match[j]];
        if (currIndex <= prevIndex) {
            return false;
        }
        prevIndex = currIndex;
    }
    return true;
}