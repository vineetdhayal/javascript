function read(obj, path) {
    const dot = path.indexOf('.');
    if (dot === -1) {
        console.log(obj, path);
        console.log(obj[path]);
        return;
    }
    return read(obj[path.slice(0, dot)], path.slice(dot + 1));
}

const obj = {
    A: {
        B: {
            C: {
                D: {
                    E: 2,
                },
            },
        },
    },
};

console.log(read(obj, "A.B.C.D.E"));

