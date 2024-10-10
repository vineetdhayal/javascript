function once(callback) {
    let called = false;
    let returnValue = undefined;

    return function () {
        if (!called) {
            console.log('came');
            returnValue = callback();
            called = true;
        }
        else {
            console.log('not came');
            return returnValue;
        }
    }
}

const call = () => {
    console.log('hello')
}

const wrapped = once(call);

console.log(wrapped())
console.log(wrapped())
console.log(wrapped())
console.log(wrapped())
