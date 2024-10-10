function once(cb) {
    let counter = 0;
    let result;

    return function (...args) {
        counter = counter + 1;
        if (counter === 1) {
            return result;
        }
        result = cb(args);

        return result
    }
}
