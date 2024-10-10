let arr = [1, 2, 3, 4, 16, 18, 19];

let start = 0;
let end = arr.length - 1;
let initialSum = arr[start] + arr[end];

for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] + arr[arr.length - i - 1] === initialSum) {
        console.log('came');
        continue;
    }
    else if (arr[i] !== arr[i - 1] + 1) {
        console.log('came', i);
        console.log(start + 'missin');
    }
    else if (arr[arr.length - i - 1] !== arr[arr.length - i] - 1) {
        console.log('came here', arr[arr.length - i - 1]);
        break;
    }
}