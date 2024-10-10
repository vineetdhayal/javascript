function executeInSeries(tasks) {
    return new Promise((resolve, reject) => {
        let results = [];
        function executeMe(index) {
            if (index > tasks.length) {
                resolve(results);
            }
            let task = tasks[index];
            task().then((res) => {
                results.push(res);
                executeMe(index + 1);
                
            }).catch(() => {
                console.log('i am called');
                reject('Error');
            })
        }
        executeMe(0);
    })
}

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('first resolved');
        resolve('first')
    }, 1000)
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('second resolved');
        resolve('first')
    }, 1500)
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('third resolved');
        resolve('first')
    }, 2000)
});

const tasks = [p1, p2, p3];

executeInSeries(tasks).then((ans) => {
    console.log(ans);
}).catch((err) => {
    console.log('errored out')
});