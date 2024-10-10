Array.prototype.myConcat = function () {
    console.log(arguments);
    let newArr = this;
    for (let i = 0; i < arguments.length; i++) {
        newArr.push(...arguments[i]);
    }

    return newArr;
}

let first = [1, 2, 3];
console.log(first.myConcat([4, 5, 6], [7,8], [45,4], [1,2]));
