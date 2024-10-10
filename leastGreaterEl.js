function solve(arr) {
    let s = new Set();
    for (let i = arr.length - 1; i >= 0; i--) {
        // traversing the array backwards
        s.add(arr[i]);
        // inserting the element into set
        let it = -1;
        // finding upper bound
        // console.log(s, 'setval');
        for (let j of s) {
            // console.log(j, 'j');
            if (j > arr[i]) {
                it = j;
                break;
            }
        }

        if (it == -1) {
            arr[i] = -1;
        } else {
            arr[i] = it;
        }
    }
}

function printArray(arr) {
    for (let i of arr) {
        console.log(i + " ");
    }
    console.log();
}

let arr = [8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28];
// printArray(arr);
solve(arr);
printArray(arr);
