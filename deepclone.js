function clone(x) {
    if (typeof x !== 'object') {
        return x;
    }
    let out = Array.isArray(x) ? [] : {};
    for (let y of Object.keys(x)) {
        console.log(y);
        out[y] = clone(x[y]);
    }

    return out;
}

let p = { x: { y: { z: 6 } } };
let d = clone(p);
d.x.y.z = 89;

console.log(p,d);
