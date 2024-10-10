let sum = 6;
let arr = [1, 2, 90, 3, 7];

function findPair(arr, sum) {
    let s = new Set();
    for (let i = 0; i < arr.length; i++) {
        console.log(s);
        if (s.has(sum - arr[i])) {
            console.log('exist');
            return;
        }
        else {
            s.add(arr[i]);
        }
    }
    console.log('dont exist')
}

findPair(arr, sum);
