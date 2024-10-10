let firstPromise = new Promise((resolve, reject) => {
    resolve('[vineet')
});

let secondPromise = new Promise((resolve, reject) => {
    resolve('works at factset')
})

let thirdPromise = new Promise((resolve, reject) => {
    reject('Software Engineer')
})

let promises = [firstPromise, secondPromise, thirdPromise];

function promiseRecursion(promises) {
    if (!promises.length) return;
    console.log(promises);
    const currPromise = promises.shift();
    currPromise.then((res) => console.log(res)).catch((err) => console.log('err', err));
    promiseRecursion(promises);
}

promiseRecursion(promises);
