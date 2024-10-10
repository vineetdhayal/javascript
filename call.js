let x = {
    name: 'pqr',
    tell: function (args1, args2) {
        console.log(this.name, args1, args2);
    }
}

Function.prototype.myCall = function (context = {}, ...args) {
    let z = {};
    console.log(args);
    z = context;
    z.fn = this;
    z.fn(...args);
}

Function.prototype.myBind = function (context = {}) {
    let t = this;
    return function (...args) {
        console.log(t);
        context.fn = t;
        context.fn(...args);
    }
}

Function.prototype.mmyBind = function (context = {}) {
    let t = this;
    return function (...args) {
        context.fn = t;
        return context.fn(...args);
    }
}

let z = x.tell.mmyBind({ name: 'dess' });
z('dss', '3423');


/**
 * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
 * @param thisArg The object to be used as the this object.
 * @param argArray A set of arguments to be passed to the function.
 * @return {any}
 */
Function.prototype.myApply = function (thisArg, argArray = []) {
    return this.call(thisArg, ...argArray);
};

/**
* Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
* @param thisArg The object to be used as the this object.
* @param argArray A set of arguments to be passed to the function.
* @return {any}
*/
Function.prototype.myApply = function (thisArg, argArray = []) {
    return this.bind(thisArg, ...argArray)();
};
