function printString(num) {
    let cols = [];
    while (num > 0) {
        let rem = num % 26;
        if (rem === 0) {
            cols.push('Z');
            num = Math.floor(num / 26) - 1;
        }
        else {
            cols.push(String.fromCharCode(rem - 1 + 'A'.charCodeAt(0)));
            num = Math.floor(num / 26);
        }
    }

    console.log(cols.reverse().join(''));
}

printString(26);
printString(51);
printString(52);
printString(80);
printString(676);
printString(702);
printString(705);