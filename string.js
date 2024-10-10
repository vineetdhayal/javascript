var mystr = "aaabbbccccccceeee";

function first(s, start, end, ch) {
    let res;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        console.log(s[mid], ch);
        if (s[mid] < ch) {
            start = mid + 1;
        }
        else if (s[mid] > ch) {
            end = mid - 1;
        }
        else {
            res = mid;
            end = mid - 1;
        }
    }

    return res;
}

function second(s, start, end, ch) {
    let res;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        if (s[mid] < ch) {
            start = mid + 1;
        }
        else if (s[mid] > ch) {
            end = mid - 1;
        }
        else {
            res = mid;
            start = mid + 1;
        }
    }

    return res;
}


function count(s, ch) {
    let start = 0;
    let e = s.length - 1;
    const firstData = first(s, 0, e, ch);
    const secondData = second(s, 0, e, ch);
    console.log(firstData, secondData);
}

count(mystr, 'c')