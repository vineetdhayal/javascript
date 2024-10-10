let matrix = [[1, 1,1], [1, 0, 1], [1, 1, 1]];

let newMatrix = JSON.parse(JSON.stringify(matrix));

let cols = new Set([]);
let rows = new Set([]);

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
            rows.add(i);
            cols.add(j);
        }
    }
}

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (rows.has(i) || rows.has(j)) {
            newMatrix[i][j] = 0;
        }
        else {
            newMatrix[i][j] = matrix[i][j];
        }
    }
}

console.log(newMatrix);