function printWords(number, curr, n, output) {
    let hashTable = ["", "", "abc", "def", "ghi", "jkl",
        "mno", "pqrs", "tuv", "wxyz"];

    if (curr === n) {
        console.log(output.join(''));
        return;
    }

    for (let i = 0; i < hashTable[number[curr]].length; i++) {
        output.push(hashTable[number[curr]][i]);
        printWords(number, curr + 1, n, output);
        output.pop();
    }
}

let number = [2, 3, 4];
let n = number.length;

printWords(number, 0, n, []);
