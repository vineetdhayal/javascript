
function memoize(fn) {
    let cache = {};

    return (...args) => {
        let cachekey = JSON.stringify(args);
        if (cache[cachekey]) {
            return cache[cachekey];
        }
        else {
            cache[cachekey] = fn(...args);
            console.log('my cache', cache);
            return cache[cachekey];
        }
    }
}

const add = (...args) => {
    let p = 0;
    console.log(args);
    args.forEach((q) => p = p + q);
    console.log('called sum', p)
    return p;
};

const stored = memoize(add);

console.log(stored(54, 5));
console.log(stored(54, 5));
