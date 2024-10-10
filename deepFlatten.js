const obj = {
    a: 1,
    b: [2, 3],
    c: {
        d: 4,
        e: [5, 6],
        f: {
            g: 7
        }
    }
};
//    Output:-
//    {
//      "a": 1,
//      "b_0": 2,
//      "b_1": 3,
//      "c_d": 4,
//      "c_e_0": 5,
//      "c_e_1": 6,
//      "c_f_g": 7
//    }
//    */

function deepFlatMe(obj, str) {
    let newObj = {};
    for (let i in obj) {
        if (typeof obj[i] === 'object') {
            newObj = { ...newObj, ...deepFlatMe(obj[i], str ? `${str}_${i}` : i) }
        }
        else {
            newObj[str ? `${str}_${i}` : i] = obj[i];
        }
    }
    return newObj;
}

function deepFlatObject(obj, prefix = '') {
    return Object.keys(obj).reduce((acc, k) => {
        const pre = prefix.length ? prefix + '_' : ' ';
        if (typeof obj[k] === 'object' && obj[k] !== null) {
            Object.assign(acc, deepFlatObject(obj[k], pre + k));
        }
        else {
            acc[pre + k] = obj[k];
        }
        return acc;
    }, {})
}

function deepFlat(obj, prefix = '') {
    return Object.keys(obj).reduce((acc, k) => {
        const pre = prefix.length ? prefix + '_' : '';
        if (typeof obj[k] === 'object' && obj[k] !== null) {
            Object.assign(acc, deepFlat(obj[k], pre + k));
        }
        else {
            acc[pre + k] = obj[k];
        }
        return acc;
    }, {})
}

console.log(deepFlatMe(obj, ''));
