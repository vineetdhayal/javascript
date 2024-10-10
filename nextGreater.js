var arr = [11, 13, 21, 3];

function printNext(arr) {
    let s = [];
    for (let i = 0; i < arr.length; i++) {
        if (s.length === 0) {
            s.push(arr[i]);
            continue;
        }
        if (s[s.length - 1] < arr[i]) {
            while (s[s.length - 1] < arr[i]) {
                console.log(s[s.length - 1]);
                s.pop();
            }
        }
        s.push(arr[i]);
    }
    console.log('sss', s)
}

printNext(arr);