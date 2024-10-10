let total = [];
const original = setTimeout;
setTimeout = (callback, delay) => {
    const id = original(callback, delay);
    total.push(id);
}

setTimeout(() => { console.log('first') }, 1000);
setTimeout(() => { console.log('second') }, 1000);
setTimeout(() => { console.log('third') }, 1000);
setTimeout(() => { console.log('fourth') }, 1000);
setTimeout(() => { console.log('fifth') }, 1000);

console.log(total);

function clear() {
    while (total.length) {
        console.log('called');
        clearTimeout(total.pop());
    }
}
clear();
console.log(total.length);
