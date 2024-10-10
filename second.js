function second(arr) {
    if (arr.length < 2) {
        return
    }
    let first, second = -100;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        }
        else if (arr[i] != first && arr[i] > second) {
            second = arr[i];
        }
    }
}
