function getValue(x, property) {
    let dot = property.indexOf('.');
    if (dot === -1) {
        return x[property];
    }
    return getValue(x[property.substring(0, dot)], property.substring(dot + 1))
}

function sortBy(collection, property) {
    // do not remove
    'use strict';

    return collection.sort((x, y) => getValue(x, property) != null ? getValue(x, property) - getValue(y, property) : getValue(y, property) - getValue(x, property));

    // write your solution below
}


const arrayOne = [{ a: 1 }, { a: 3 }, { a: 2 }];

// expected output: [{a: 1}, {a: 2}, {a: 3}];
sortBy(arrayOne, 'a');

const arrayTwo = [{ a: 1, b: 'z' }, { a: 2, b: 'y' }, { a: 1, b: 'x' }, { a: 2, b: 'w' }];

// expected output: [{a: 1, b: 'z'}, {a: 1, b: 'x'}, {a: 2, b: 'y'}, {a: 2, b: 'w'}];
sortBy(arrayTwo, 'a');

const arrayThree = [{ a: 1, b: { c: 4 } }, { a: 2, b: { c: 2 } }, { a: 3, b: { c: 1 } }, { a: 4, b: { c: 0 } }];

// expected output: [{"a":4,"b":{"c":0}},{"a":3,"b":{"c":1}},{"a":2,"b":{"c":2}},{"a":1,"b":{"c":4}}]
sortBy(arrayThree, 'b.c');