let obj = {
    a: {
        b: (a, b, c) => a + b + c,
        c: (a, b, c) => a + b - c,
    },
    d: (a, b, c) => a - b - c
}

function callMe(obj) {
    let ans = {};
    return (a, b, c) => {
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                ans[key] = {...callMe(obj[key])(a,b,c)};
            }
            else {
                ans[key] = obj[key](a, b, c);
            }
        }
        return ans;
    }
}

console.log(callMe(obj)(1, 1, 1));

// Create a function
// Fn(obj)(1,1,1);
// output
// {
// 	a : {
// 		b : 3,
// 		c : 1
// 		}
// 		d: -1
// },