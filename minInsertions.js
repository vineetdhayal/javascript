function findMinInsertions(str) {
    let n = str.length;
    let table = Array.from({ length: n }, () => new Array(n).fill(0));
    console.log(table);
    for (let gap = 1; gap < n; gap++) {
        for (let l = 0, h = gap; h < n; l++, h++) {
            table[l][h] = (str[l] === str[h] ? table[l - 1][h - 1] : Math.min(table[l][h - 1], table[l + 1][h]) + 1);
        }
    }
    console.log(table);
}

let str = "geeks";

findMinInsertions(str);
