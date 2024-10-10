function Increment() {
    if (!(this instanceof Increment)) {
        return new Increment();
    }

    this.value = 0;
}

Increment.prototype[Symbol.toPrimitive] = function () {
    return ++this.value;
};



// If you have to implement the following Increment function then how would you do it?

// let increment1 = new Increment();
// let increment2 = Increment();

// console.log(increment1 == +increment2); // true
// console.log(`val: ${increment1}`); // val: 1
// console.log(`val: ${increment1}`); // val: 2
// console.log(`val: ${increment1}`); // val: 3