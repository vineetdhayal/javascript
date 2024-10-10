// var length = 14;

// function callback() {
//     console.log(this.length);
// }

// let obj = {
//     length: 5,
//     method() {
//         // arguments[0]()
//         // callback();
//     }
// }

// obj.method(callback, 2, 3);

class calculator {
    constructor() {
        this.ans = 0;
    }

    add(value) {
        this.ans = this.ans + value;
        return this;
    }
    subtract(value) {
        this.ans = this.ans - value;
        return this;
    }
    answer() {
        return this.ans;
    }
}

const calc = new calculator();
console.log(calc.add(4).subtract(1).answer())
