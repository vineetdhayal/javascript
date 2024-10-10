let inputArr = [2, 9, 1, 5, 2, 3, 1, 2, 7, 4, 3, 8, 29, 2, 4, 6, 54, 32, 2, 100];
let slow = 0;
for (let fast = 0; fast < inputArr.length; fast++) {
    if (inputArr[fast] !== 2 && inputArr[slow] === 2) {
        [inputArr[fast], inputArr[slow]] = [inputArr[slow], inputArr[fast]];
        slow++;
    }
    console.log(inputArr)
}

console.log(inputArr);