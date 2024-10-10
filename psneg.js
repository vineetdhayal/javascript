function arrange(arr) {
    console.log(arr);
    let even = 0;
    let odd = 1;
    while (even < arr.length && odd < arr.length) {
        if (arr[even] > 0) {
            even = even + 2;
        }
        if (arr[odd] < 0) {
            odd = odd + 2;
        }
        if (arr[even] < 0 && arr[odd] > 0) {
            [arr[even], arr[odd]] = [arr[odd], arr[even]];
            even = even + 2;
            odd = odd + 2;
        }
    }
    console.log(arr);
}

let arr = [1, 2, -3, -1, -2, -3, 4, -5];
arrange(arr);
