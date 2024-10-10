function counter() {
    let count = 0;

    return function() {
        console.log(count);
        return count = count+1;
    }
}

console.log(counter()());