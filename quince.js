async function async1() {
    console.log('hii');
    await async2();
    console.log('hello');
}

async function async2() {
    console.log('async 20');
}

console.log('a ma called');

async1();

setTimeout(() => {
    console.log('timeout');
}, 1000);

Promise.resolve(
    console.log('resolved')
).then(() => {
    console.log('came in then')
})

console.log('final console');

// a ma called hii async 20 resolved final console came in then timeout hello