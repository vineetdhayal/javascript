function myPromise(callback) {
    let resolved;
    let rejected;
    let resolvedValue;
    let rejectedValue;
    let thenCallback;
    let catchcallback;
    function res(value) {
        if (typeof thenCallback === 'function') {
            thenCallback(value);
        }
        if (value) {
            resolved = true;
            resolvedValue = value;
        }
    }
    function rej(value) {
        rejected = true;
        rejectedValue = value;
    }
    this.then = function (callback) {
        console.log('hii', resolved);
        if (resolved) {
            callback(resolvedValue);
        }
        else {
            thenCallback = callback;
        }
    }
    this.catch = function (callback) {
        callback(rejectedValue)
    }
    callback(res, rej)
}

let x = new myPromise((res, rej) => {
    setTimeout(() => res(10), 2000)
}).then((r) => {
    console.log(r * 20);
})

// let y = new myPromise((res, rej) => {
//     rej(10)
// }).catch((err) => {
//     console.log('err');
// })