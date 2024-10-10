function gfg(str) {
    let st = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            st.push(i);
        }
        else if (str[i] === ')' && st[st.length - 1] === '(') {
            st.pop();
        }
        else {
            st.push(i);
        }
    }
    if (st.length === 0) {
        return str.length;
    }
    let result = 0;
    let last = str.length - 1;
    while (st.length) {
        let index = st.pop();
        if (result < last - index) {
            result = last - index + 1;
            last = index;
        }
    }
    return result;
}



const str1 = "((()()";
console.log(gfg(str1));
const str2 = "()(()))))";
console.log(gfg(str2));