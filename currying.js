function sumData(a) {
    return function (b) {
        if (b) {
            return sumData(a + b);
        }
        return sumData(a);
    }
}

function summ(a) {
    return function () {
        if (Object.keys(arguments).length) {
            let sum = 0;
            for (let i = 0; i < Object.keys(arguments).length; i++) {
                sum = sum + arguments[i];
            }
           return summ(a + sum);
        }
        else {
            return a;
        }
    }
}

// function sumData(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

console.log(summ(1)(2, 3)(4, 5, 6)(7,8,9,10)());
