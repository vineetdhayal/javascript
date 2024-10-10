const filter = (arr, fn) => {
    return new Promise((resolve, reject) => {
        let result = [];

        arr.forEach((item, index) => {
            fn(item, (error, res) => {
                result[index] = res;
            })
            if (result.length === arr.length) {
                resolve(result);
            }
        })
    })
}

let numPromise = filter([1, 2, 3, 4, 5], function (num, callback) {
    setTimeout(function () {
        num = num * 2;
        console.log(num);

        // throw error
        if (num === 7) {
            callback(true);
        } else {
            callback(null, num !== 4);
        }

    }, 2000);
});

console.log(numPromise);

numPromise
    .then((result) => console.log("success:" + result))
    .catch(() => console.log("no success"));

// Output:
// 2
// 4
// 6
// 8
// 10
// "success:1,3,4,5"
