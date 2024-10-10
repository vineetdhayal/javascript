function findPath(row, col, maze, n, result, currentPath) {
    maze[row][col] = 0;
    if (row === n - 1 && col === n - 1) {
        result.push(currentPath);
        return;
    }
    for (let i = 0; i < 4; i++) {
       
    }
}

const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1]
];

const n = maze.length;
// Array to store all the valid paths
const result = [];
// Store current path
let currentPath = "";

findPath(0, 0, maze, n, result, currentPath);
