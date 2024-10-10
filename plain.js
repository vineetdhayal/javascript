function isPlainObject(value) {
    if (value == null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
}

// how to check that object is a plain or not