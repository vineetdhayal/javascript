/**
 * @param {Function} comparator - The comparator function used to determine equality between elements.
 * @param {...Array} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the elements that are present in all given arrays.
 */
export default function intersectionWith(comparator, ...arrays) {
    if (arrays.length === 0) {
        return [];
    }
    let first = arrays[0];
    let second = arrays[1];
    let third = [];
    let rem = arrays.slice(1);

    for (let x = 0; x < first.length; x++) {
        let count = 0;
        for (let y = 0; y < rem.length; y++) {
            for (let z = 0; z < rem[y].length; z++) {
                if (comparator(first[x], rem[y][z])) {
                    count++;
                }
            }
        }
        if (count === rem.length) {
            third.push(first[x]);
        }
    }

    return third;
}


export default function intersectionWith(comparator, ...arrays) {
    if (!arrays.length) {
        return [];
    }

    const firstArray = arrays[0];

    // Perform intersection
    return firstArray.filter((value) =>
        arrays
            .slice(1)
            .every((arr) => arr.some((otherValue) => comparator(value, otherValue))),
    );
}


const arr1 = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
];
const arr2 = [
    { y: 2, x: 1 },
    { x: 3, y: 4 },
];

const result = intersectionWith(
    (a, b) => a.x === b.x && a.y === b.y,
    arr1,
    arr2,
); // => [{ x: 1, y: 2 }]