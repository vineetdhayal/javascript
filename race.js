let x = new Promise((res, rej) => setTimeout(rej(100), 1000));
let y = new Promise((res, rej) => setTimeout(res(300), 3000));

Promise.myRace = function (promises) {
    return new Promise((res, rej) => {
        return promises.forEach((k) => Promise.resolve(k).then(res).catch(rej))
    })
}


Promise.myRace([x, y]).then((res) => console.log(res)).catch((rej) => console.log(rej));
