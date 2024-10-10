function reverse(s) {
    let x = s;
    let arr = x.split('');
    for (let i = 0; i < arr.length / 2; i++) {
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]]
    }

    console.log(arr.join(''));
}

reverse('efdsfred')