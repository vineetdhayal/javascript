Function.prototype.myBind = function (context = {}) {
    let fn = this;
    return function (...args) {
        context.fn = fn;
        console.log(context);
        return context.fn(args);
    }
}

function xyz(a, b) {
    console.log(this.name, a, b);
}

let bindFn = xyz.myBind({ name: 'vineet' });
bindFn(1,12);

// xyz.bind({name: 'vineet'}, 123, 456)();
