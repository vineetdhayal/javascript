function intersectionBy(iteratee, ...arrays) {
    if (arrays.length <= 1) {
        return arrays.map((x) => iteratee(x));
    }
    let newArr = arrays[0].map((x) => iteratee(x));

    let mappedArrays = arrays.map((arr) => {
        return arr.map((x) => iteratee(x))
    })

    let intersection = newArr.map((x) => {
        if (mappedArrays.every((arr) => arr.includes(x))) {
            return x;
        }
    })

    const updated = [];

    intersection.forEach((k) => {
        const ind = newArr.findIndex((y) => y === k);
        updated.push(arrays[0][ind]);
        arrays[0].splice(ind, 1);
    })

    return updated;
}

const result2 = intersectionBy(
    (str) => str.toLowerCase(),
    ['apple', 'banana', 'ORANGE', 'orange'],
    ['Apple', 'Banana', 'Orange'],
);

console.log(result2);


export default function intersectionBy(iteratee, ...arrays) {
    const mappedArrays = arrays.map((x) => x.map(iteratee));
    console.log(mappedArrays);

    let intersectedValues = mappedArrays[0].filter((value) => {
        return mappedArrays.every((y) => y.includes(value));
    });

    const z = intersectedValues.map((p) => {
        const ind = mappedArrays[0].indexOf(p);
        return arrays[0][ind];
    })

    return z;
}