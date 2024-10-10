function getType(value) {
    return Object.prototype.toString.call(value);
}

function shouldDeepCompare(type) {
    return type === '[object Object]' || type === '[object Array]'
}

export default function deepEqual(valueA, valueB) {
    let type1 = getType(valueA);
    let type2 = getType(valueB);

    if (type1 === type2 && shouldDeepCompare(type1) && shouldDeepCompare(type2)) {
        let entry1 = Object.entries(valueA);
        let entry2 = Object.entries(valueB);
        if (entry1.length !== entry2.length) {
            return false;
        }
        return entry1.every(([k, v]) => Object.hasOwn(valueB, k) && deepEqual(v, valueB[k]))
    }

    return Object.is(valueB, valueA);
}
