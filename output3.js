var first = [1, , 3];

var second = [...first];

first.forEach((value, index) => {
  console.log(index, value);
});

second.forEach((value, index) => {
  console.log(index, value);
});


// The answer would be Option 1 because the length of the first array would be 3. first is a sparse array i.e. array with empty slots in between. The indices in sparse array itself doesn't exist rather than having undefined as value.

// console.log(first.length); // 3

// first[0] -- 1
// first[1] -- empty slot
// first[2] -- 3

// Since the array is just an object then its representation would be
// // first
// {
//     "0": 1,
//     "2": 3
// }
// Now, when we use the spread operator to create a copy then it will iterate over the array as in i: 0 to n - 1 and set the value second[i] = first[i]. Since, when we access empty slots in an array then the returned value would be undefined, therefore, second[1] would be undefined. By spreading, we just created a dense array.

// // second
// {
//     "0": 1,
//     "1": undefined,
//     "2": 3
// }
// Array.prototype.forEach iterates over the array and check if the indices exist in the array. If yes, then only callback will be invoked with index & value as arguments.

// To know more --

// https://github.com/v8/v8/blob/ca6e40d7ba853319c15196fef3f4536c8b3929fe/src/js/array.js#L1059

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// For useful and amazing frontend and programming tutorials: https://bit.ly/devtools-yt