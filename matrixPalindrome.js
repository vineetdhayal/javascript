let mat = [
    ['a', 'a', 'a', 'b'],
    ['b', 'a', 'a', 'a'],
    ['a', 'b', 'b', 'a']
];

function ispalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function callFunctionToPrintPalindrome(mat, i, j, path, result) {
    console.log(mat);
    path += mat[i][j];
    if (i === mat[0].length - 1 && j === mat.length - 1) {
        if (ispalindrome(path)) {
            result.push(path);
        }
    }
    if (i + 1 < mat[0].length) {
        callFunctionToPrintPalindrome(mat, i + 1, j, path, result);
    }
    if (j + 1 < mat.length) {
        callFunctionToPrintPalindrome(mat, i, j + 1, path, result);
    }
}

function findPalindromicPaths(matrix) {
    let result = [];
    callFunctionToPrintPalindrome(matrix, 0, 0, '', result);
    console.log(result);
}

let result = findPalindromicPaths(mat);