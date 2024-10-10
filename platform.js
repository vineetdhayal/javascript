let n = 6;
let arr = [9.00, 9.45, 9.55, 11.00, 15.00, 18.00];
let dep = [9.20, 12.00, 11.30, 11.50, 19.00, 20.00];
arr.sort((a, b) => a - b);
dep.sort((a, b) => a - b);
console.log(arr);
console.log(dep);

// [ 9, 9.45, 9.55, 11, 15, 18 ]
// [ 9.2, 11.3, 11.5, 12, 19, 20 ]

let i = 1;
let j = 0;
let plat = 0;
let req = 0;

while (i < n && j < n) {
    if (arr[i] <= dep[j]) {
        plat++;
        i++;
    }
    else if (arr[i] > dep[j]) {
        plat--;
        j++;
    }
    if (plat > req) {
        req = plat;
    }
}
console.log(req);
