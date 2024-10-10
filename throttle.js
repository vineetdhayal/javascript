function myThrottle(cb, delay) {
    let wait = false;
    let waitingArgs;
    return function(...args) {
        if(wait) {
            waitingArgs = args;
            return;
        };
        cb(...args);
        wait = true;
        setTimeout(() => {
            if(waitingArgs == null) {
              wait = true;
            }
            else {
                cb(...waitingArgs);
                wait = false;
            }
        }, delay)
    }
}
