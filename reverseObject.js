function invert(collection) {
    if (!collection) {
        throw new TypeError();
    }
    // DO NOT REMOVE
    let newObj = {};
    let myObj = {};
    for (let key in collection) {
        newObj[collection[key]] = newObj[collection[key]] ? newObj[collection[key]] + 1 : 1;
        myObj[key] = newObj[collection[key]] === 1 ? collection[key] : `${collection[key]}_${newObj[collection[key]] - 1}`
    }
    let ans = {};
    for (let myKey in myObj) {
        ans[myObj[myKey]] = myKey;
    }

    return ans;
    // write your code below
}

//   const data = { 'a': 'one', 'b': 'one' };
// const inverted = invert(data);

// // prints { 'one': 'a', 'one_1': 1 }
// console.log(inverted);