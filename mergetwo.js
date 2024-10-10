let arr1 = [1, 3, 5, 7];
let arr2 = [0, 2, 6, 8, 9];

let i = 0;
let j = 0;
let len = arr1.length;

while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
        arr1.splice(i, 0, arr2[j]);
        i++;
        j++;
    }
    else {
        i++;
    }
}
let newArr = arr1.slice(len);
console.log(arr1.slice(0, len), newArr.concat(arr2.slice(j)));
