let left = 0;
let right = Math.sqrt(5);

while (left < right) {
    if (left * left + right * right === c) {
        console.log(left, right);
    }
}
