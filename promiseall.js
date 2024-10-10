Promise.myAll = function implementPromiseAll(values) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        if (values.length === 0) {
            return;
        }
        values.forEach((promise, index) => {
            console.log(promise);
            console.log(Promise.resolve(promise));
            Promise.resolve(promise).then((val) => {
                console.log('hello');
                results[index] = val;
                completed = completed + 1;
                if (completed === values.length) {
                    return resolve(results);
                }
            }).catch((err) => reject([]));
        })
    })
}

Promise.newAll = function implement(values) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        values.forEach((val, index) => {
            Promise.resolve(val).then((z) => {
                console.log(z);
                results[index] = z;
                completed = completed + 1;
                if (completed === values.length) {
                    return resolve(results);
                }
            }).catch((err) => reject([]));
        })
    })
}

let firstPromise = new Promise((resolve, reject) => {
    resolve('vineet')
});

let secondPromise = new Promise((resolve, reject) => {
    resolve('works at factset')
})

let thirdPromise = new Promise((resolve, reject) => {
    resolve('Software Engineer')
})

const y = Promise.newAll([firstPromise, secondPromise, thirdPromise]).then((val) => {
    console.log(val);
}).catch((err) => {
    console.log(err);
});

// console.log(y);
