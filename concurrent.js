function throttlePromises(promises, counter) {
    return new Promise((resolve, rej) => {
        let result = [];
        let count = 0;
        function executeMe() {
            count += counter;
            let p = promises.slice(count, count + counter);
            Promise.all(p.map(pr => pr())).then((results) => {
                result.push(results)
                if (count < promises.length) {
                    resolve();
                }
                else {
                    executeMe();
                }
            });
        }
        executeMe();
    })
}

const promises = [
    () => fetch('https://jsonplaceholder.typicode.com/todos/1'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/2'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/3'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/4'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/5'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/6'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/7'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/8'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/9'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/10'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/11'),
    () => fetch('https://jsonplaceholder.typicode.com/todos/12'),
    // Add more promise functions as needed
];


const maxConcurrentCalls = 4;


// Using throttlePromises
throttlePromises(promises, maxConcurrentCalls)
    .then(results => {
        console.log('All promises completed with results:', results);
    })
    .catch(error => {
        console.error('Error:', error);
    });