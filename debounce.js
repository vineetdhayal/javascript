export default function debounce(func, wait) {
    let timeoutid = null;
    let argsToInvoke = undefined;
    let context;

    function clearTimer() {
        clearTimeout(timeoutid);
        timeoutid = null;
    }

    function invoke() {
        if (timeoutid === null) {
            return;
        }
        clearTimer();
        func.apply(context, argsToInvoke);
    }

    function fn(...args) {
        context = this;
        argsToInvoke = args;
        timeoutid = setTimeout(() => {
            invoke();
        }, wait);
    }

    fn.cancel = clearTimer;
    fn.flush = invoke;
    return fn;
}
