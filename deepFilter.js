const input = {
    a: 1,
    b: {
        c: 'hello world',
        d: 2,
        e: {
            f: {
                g: -4
            }
        },
        h: 'good after noon'
    }
}

function deepFilter(input, callback) {
    let output = {};
    

    return output;
}

console.log(deepFilter(input, (el) => el >= 0))
