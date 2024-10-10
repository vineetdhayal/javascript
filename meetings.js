let arr = [[7, 9], [1, 3], [5, 7], [4, 6], [9, 10]];

let start = [];
let end = [];
[1,4,5,7,9]
[3,6,7,9,10]
for (let i = 0; i < arr.length; i++) {
    start[i] = arr[i][0];
    end[i] = arr[i][1];
}

start.sort((a, b) => a - b);
end.sort((a, b) => a - b);

let endTime = 0;
let total = 0;

for (let j = 0; j < start.length; j++) {
    if (start[j] < end[endTime]) {
        total = total + 1
    }
    else {
        endTime++;
    }
}

console.log(total);
