export default function promiseTimeout(promise, duration) {
    return new Promise((resolve, reject) => {
        let id = setTimeout(() => {
            reject('Promise timeout');
        }, duration);
        promise.then(resolve).catch(reject).finally(() =>
            clearTimeout(id)
        );
    })
}

// function fakeFetch(latency) {
//     return new Promise((resolve, reject) => {
//       // Simulate an asynchronous operation that resolves after `latency`.
//       setTimeout(() => {
//         resolve('Data successfully fetched!');
//       }, latency);
//     });
//   }
  
//   const response = await promiseTimeout(fakeFetch(1000), 2000);
//   console.log(response); // Data successfully fetched!
  
//   await promiseTimeout(fakeFetch(5000), 2000);
//   // "Promise timeout" thrown.