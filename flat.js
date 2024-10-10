let arr = [1, 2, [3, 4, [5,6,[7,8]]]]
let depth = 1;
let count = 0;
[1, 2, [3, 4, [5,6,[7,8]]]]

// let newArray = [].concat(...arr);

function flatten(arr, depth) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log('arr[i]', arr[i]);
        if (Array.isArray(arr[i]) && depth > 0) { newArray.push(...flatten(arr[i], depth - 1)) }
        else {
            newArray.push(arr[i]);
        }
        // console.log(newArray);
    }

    return newArray;
}

const newArray = flatten(arr, 2);

console.log(newArray);
