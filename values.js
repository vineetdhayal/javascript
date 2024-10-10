let obj = {
    firstName: "X",
    lastName: "Y",
    project: {
        id: 1,
        name: "ABC"
    }
};

function getValues(obj) {
    let output = [];
    for (let key in obj) {
        if (typeof obj[key] !== 'object') {
            output.push(obj[key]);
        }
        else {
            output = [...output, ...getValues(obj[key])];
        }
    }

    return output;
}

function getStringValues(arr) {
    let s = '';

    console.log(arr.length);

    for (let k = 0; k < arr.length; k++) {
        s=s.concat(String(arr[k]));
        s=s.concat(',')
    }

    return s;
}

let t = getValues(obj);
console.log(t);
console.log(getStringValues(t));