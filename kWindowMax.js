function maxSlidingWindow(arr, k) {
    let maxheap = [];
    let ans = [];

    for (let i = 0; i < k; i++) {
        maxheap.push({ value: arr[i], index: i });
    }
    maxheap.sort((a, b) => b.value - a.value);
    ans.push(maxheap[0].value);
    for (let j = k; j < arr.length; j++) {
        maxheap.push({ value: arr[j], index: j });
        while (maxheap[0].index <= j - k) {
            maxheap.shift();
        }
        maxheap.sort((a, b) => b.value - a.value);
        console.log(maxheap);
        ans.push(maxheap[0].value);
    }
    return ans;
}

const arr = [2, 3, 7, 9, 5, 1, 6, 4, 3];
const k = 3;

console.log(maxSlidingWindow(arr, k));
