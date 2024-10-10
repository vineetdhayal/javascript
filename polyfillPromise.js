function promisePolyfill(executor) {
    let onResolve;
    let onReject;
    let isfulfilled;
    let isCalled;
    let value;
    let isRejected;
    this.state = 'pending';

    function resolve(val) {
        this.state = 'fulfilled'
        isfulfilled = true;
        value = val;

        if (typeof onResolve === 'function') {
            onResolve(val);
            isCalled = true;
        }

        return this;
    }

    function reject(val) {
        this.state = 'rejected'
        console.log('came');
        isRejected = true;
        value = val;
        if (typeof onReject === 'function') {
            console.log('val', val())
            isCalled = true;
            onReject(val);
        }
        return this;
    }

    this.then = function (callback) {
        onResolve = callback;

        if (isfulfilled && !isCalled) {
            isCalled = true;
            onResolve(value);
        }

        return this;
    }

    this.catch = function (callback) {
        onReject = callback;
        console.log(onReject);

        if (isRejected && !isCalled) {
            isCalled = true;
            onReject(value);
        }

        return this;
    }
    executor(resolve, reject)
}

const y = promisePolyfill((resolve, reject) => {
    reject(() => { setTimeout(()=>resolve(4)) }).then((res) => { console.log('then', res) }).catch((res) => { console.log('errrr', res) });
})
