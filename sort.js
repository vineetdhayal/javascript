let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

let low = 0;
let mid = 0;
let high = arr.length - 1;
let temp = 0;

while (mid <= high) {
    switch (a[mid]) {
        case 0:
            temp = a[low];
            a[low] = a[mid];
            a[mid] = temp;
            low++;
            mid++;
    }
}
