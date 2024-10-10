const object = {
    foo: {
        bar: 1
    },
    baz: 5,
    lor: ['mir', 'dal']
};

function get(object, path, fallback) {
    const dot = path.indexOf('.');

    if (object === undefined) {
        return fallback || undefined;
    }

    if (dot === -1) {
        if (path in object) {
            return object[path];
        }
        return fallback || undefined;
    }

    return get(object[path.substr(0, dot)], path.substr(dot + 1), fallback);
}

console.log(get(object, 'none.bar'));
// => undefined
console.log(get(object, 'none.bar', 'default'));
// => 'default'
console.log(get(object, 'baz'));
// => 5
console.log(get(object, 'foo.bar'));
// => 1
console.log(get(object, 'lor.1'));
// => 'dal'
