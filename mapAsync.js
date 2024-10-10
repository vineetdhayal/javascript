export default function mapAsync(iterable, callbackFn) {
    return new Promise((resolve, rej) => {
        let pending = iterable.length;
        let completed = [];
        if (iterable.length === 0) {
            resolve([]);
        }
        iterable.forEach((ans, index) => {
            callbackFn(ans).then((res) => {
                completed[index] = res;
                pending--;
                if (pending === 0) {
                    resolve(completed);
                }
            }).catch((err) => rej(err));
        })
    })
}


// const asyncDouble = (x: number) =>
//     new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(x * 2);
//         }, 10);
//     });

// const doubled = await mapAsync([1, 2], asyncDouble);
// console.log(doubled); // [2, 4]