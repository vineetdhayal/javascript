let str = '3(ab2(c4(ghij))de)';
let stack = [];
let currStr = '';
let myStr = '';

function repeat(str, count) {
    let result = str;
    let ans = str;
    while (count > 0) {
        count = count / 2;
        result = result.concat(result);
    }
    console.log('result', result);
    return ans.concat(result);
}

for (let i = str.length - 1; i >= 0; i--) {
    console.log(stack, str[i], !isNaN(+str[i]));
    if (str[i] != '(' && isNaN(+str[i])) {
        stack.push(str[i]);
    }
    else if (str[i] === '(') {
        myStr = '';
        let k = stack.length - 1;
        while (stack[k] !== ')') {
            myStr += stack[k];
            k--;
            stack.pop();
        }
        stack.pop();
    }
    else if (!isNaN(+str[i])) {
        console.log('here', myStr);
        const newStr = repeat(myStr, str[i]);
        console.log('updated', myStr);
        for (let x = newStr.length - 1; x >= 0; x--) {
            stack.push(newStr[x]);
        }
    }
}
