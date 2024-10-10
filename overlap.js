let input = [[1, 2], [3, 8], [4, 7]];

// 1,2 4,7 3,8


function minRemovals(input) {
    input.sort((a, b) => a[1] > b[1] ? 1 : -1);
    console.log(input);
    let match = 0;
    let end = input[0][1];
    for (let k = 1; k < input.length; k++) {
        if (input[k][0] < end) {
            match++;
        }
        end = input[k][1];
    }

    return match;
}

console.log(minRemovals(input));
