const object = {
    a: 5,
    b: 6,
    c: {
        f: 9,
        g: {
            m: 5,
            n: 11,
        },
        h: {
            m: 12,
            n: 13,
        },
    },
};

function squashObject(obj, curr = '') {
    let newObj = {};
    for (let key in obj) {
        // if(!key) return {};
        let newstr = curr ? `${curr}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(newObj, squashObject(obj[key], newstr));
        }
        else {
            newObj[newstr] = obj[key];
        }
    }

    return newObj;
}

console.log(squashObject(object));
