function debounce(fn, delay) {
    let timer;
    function debounceMe(...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
    debounceMe.cancel = function() {
        clearTimeout(timer);
    }
    return debounceMe;
}

function sayHello() {
    console.log('Hello!');
}

const debouncedSayHello = debounce(sayHello, 1000);

debouncedSayHello(); // Hello! will be logged after 1000ms
debouncedSayHello(); // If called again before 1000ms, the previous invocation will be canceled
debouncedSayHello(); // If called again before 1000ms, the previous invocation will be canceled

// Cancelling the delayed invocation
debouncedSayHello.cancel(); // The delayed invocation is canceled, 'Hello!' will not be logged
