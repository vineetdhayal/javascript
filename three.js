let arr = [-1, 0, 1, 2, -1, -4];
let newArr = arr.sort();
for (let i = 0; i < newArr.length; i++) {
    let j = i + 1;
    let k = newArr.length - 1;
    while (j < k) {
        if (newArr[j] + newArr[k] + newArr[i] === 0) {
            console.log(newArr[i], newArr[j], newArr[k]);
            break;
        }
        else if (newArr[j] + newArr[k] + newArr[i] > 0) {
            k--;
        }
        else if (newArr[j] + newArr[k] + newArr[i] < 0) {
            j++;
        }
    }
}