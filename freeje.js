Object.freezeMe = function (obj) {
    if (typeof obj !== 'object' || obj == null) {
        throw 'error'
    }
    Object.keys(obj).forEach((property) => {
        Object.defineProperty(obj, property, { writable: false, configurable: false })
    })

    return obj;
}

const obj1 = { x: 'hello', y: 'hey' };
Object.freezeMe(obj1);
obj1.x = 'ewdedfe';
console.log(obj1);