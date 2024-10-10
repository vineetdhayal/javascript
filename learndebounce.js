function debounce(func, timer) {
    let timeout;
    return function (args) {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => func(args), timer);
    }
}

function newThrottle(func, timer) {
    let initial = 0;
    return (...args) => {
        let last = new Date().getTime();
        if(last-initial > timer) {
            func(...args);
        }
        initial = last;
    }
}

function throttle(func, timer) {
    let wait = false;
    let waitingArgs = null;
    return function (...args) {
        if (wait === true) {
            waitingArgs = args;
            return
        };
        func(...args);
        wait = true;
        waitingArgs = null;
        setTimeout(() => {
            if (waitingArgs == null) {
                wait = false;
            }
            else {
                func(...waitingArgs);
                wait = false;
            }
        }, timer)
    }
}

const debounceInput = () => {
    debounce()
}

let y = document.querySelector('#myInput');
let btn = document.getElementById('btn');
btn.addEventListener('click', debounceInput);
console.log(y);
y.addEventListener('input', (e) => {
    // debounceupdateText(e.target.value);
    throttleUpdateText(e.target.value);
});

// const debounceupdateText = debounce((y) => console.log('debounce', y), 1000);

const throttleUpdateText = throttle((y) => console.log('throttle', y), 1000)

// function hello(x, y) {
// console.log(x, y);
// }

// function debouncehello(x,y) {
// debounce(hello(x, y), 400);
// };

sessionStorage.setItem('x', 'qwreqwe');

console.log(sessionStorage.getItem('x'));


localStorage.setItem('x', '124213');

console.log(localStorage.getItem('x'));

console.log(document.body.childNodes);
