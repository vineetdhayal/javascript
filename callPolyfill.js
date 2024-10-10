Function.prototype.callMe = function (context = {}, ...args) {
    console.log(this, args);
    if (typeof this !== 'function') {
        console.error('call functionality not possible');
    }
    context.fn = this;
    console.log(context);
    context.fn(...args);
}

Function.prototype.applyMe = function (context = {}, args = []) {
    console.log(this, args);
    if (typeof this !== 'function') {
        console.error('call functionality not possible');
    }
    if (!Array.isArray(args)) {
        console.error('Please Provide array')
    }
    context.fn = this;
    console.log(context);
    context.fn(...args);
}

function callme(args1, args2, args3) {
    console.log('this here', this);
    console.log(this.name, this.age, args1, args2, args3);
}

callme.callMe({ name: 'das', age: 34 }, 78, 989, 112);
callme.applyMe({ name: 'das', age: 34 }, [78, 989, 112]);
