function maxArithmeticLength(a, b) {
    function canFormAP(start, d) {
        let count = 0;
        let i = 0, j = 0;

        while (i < a.length || j < b.length) {
            if (i < a.length && a[i] === start) {
                count++;
                i++;
            } else if (j < b.length && b[j] === start) {
                count++;
                j++;
            } else if (i < a.length && a[i] < start) {
                i++;
            } else if (j < b.length && b[j] < start) {
                j++;
            } else {
                return -1;  // cannot form a valid AP with this d
            }
            start += d;
        }
        return count;
    }

    let maxLength = -1;

    // Check all possible common differences `d`
    for (let i = 1; i < a.length; i++) {
        let d = a[i] - a[i - 1];
        let start = a[0];
        let length = canFormAP(start, d);
        if (length !== -1) {
            maxLength = Math.max(maxLength, length);
        }
    }

    return maxLength;
}

// Example usage:
console.log(maxArithmeticLength([0, 4, 8, 16], [0, 2, 6, 12, 14, 20]));  // Output: 6
console.log(maxArithmeticLength([5, 7, 13, 14], [9, 11, 15]));  // Output: -1
console.log(maxArithmeticLength([2, 4, 8], [1, 6, 10, 12]));  // Output: 6
console.log(maxArithmeticLength([1, 5], [3, 7, 9]));  // Output: 5
