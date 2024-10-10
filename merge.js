const arr1 = [1, 2, 4, 6, 78];
const arr2 = [0, 3, 4, 5, 6];

const merge = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        }
        else if (arr1[i] >= arr2[j]) {
            arr1.splice(i, 0, arr2[j]);
            console.log(arr1);
            i = i + 1;
            j++;
        }
    }
    console.log(i, j);
    while (j < arr2.length) {
        arr1.push(...arr2.slice(i, arr2.length));
        j++;
    }

    return arr1;
}


console.log(merge(arr1, arr2));
