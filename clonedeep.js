function clone(input) {
    if (!input || typeof (input) !== 'object') {
        return input;
    }

    const output = Array.isArray(input) ? [] : {};
    for (let x of Object.keys(input)) {
        console.log(x);
        output[x] = clone(input[x]);
    }
    return output;
}

let obj = { x: { y: { z: { t: 'sdsf' } } } };

let s = clone(obj);

s.x.y.z.t = 'qwdqwrewr';

console.log(obj.x.y.z.t, s.x.y.z.t)
