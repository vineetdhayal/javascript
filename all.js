const p1 = new Promise((resolve, reject) => resolve('done 1'));
const p2 = new Promise((resolve, reject) => resolve('done 2'));


Promise.all([p1, p2]).then((ans) => {
    console.log(ans);
}).catch((err) => {
    console.log(err);
})

Promise.myAll = function implement(promises) {
    return new Promise((res, rej) => {
        let ress = [];
        let completed = 0;
        promises.forEach((p) => {
             Promise.resolve(p).then((r) => {
                ress = [...ress, r];
                completed = completed + 1;
                if (completed === promises.length) {
                    return res(ress);
                }
            }).catch((err) => {
                console.log(err);
            })
        })
    })
}

Promise.myAll([p1, p2]).then((ans) => {
    console.log(ans);
}).catch((err) => {
    console.log(err);
})
