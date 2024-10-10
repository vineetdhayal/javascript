export default function unionBy(iteratee, ...arrays) {
    let currSet = new Set();
    let ans = [];
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            if (!currSet.has(iteratee(arrays[i][j]))) {
                ans.push(arrays[i][j]);
            }
            currSet.add(iteratee(arrays[i][j]));
        }
    }
    return ans;
}

// unionBy((value: any) => value, [2], [1, 2]); // => [2, 1]

// unionBy(Math.floor, [2.1], [1.2, 2.3]); // => [2.1, 1.2]

// unionBy((o) => o.x, [{ x: 1 }], [{ x: 2 }, { x: 1 }]); // => [{ 'x': 1 }, { 'x': 2 }]