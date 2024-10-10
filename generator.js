function* generator() {
    for (let i = 0; i < 10; i++) {
        yield i;
    }
}

const out = generator();
console.log(out.next().value);

for(const value of generator()) {
    console.log(value);
}