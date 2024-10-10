class Pipe {
    constructor() {
        this.functions = [];
    }
    add(fn) {
        this.functions.push(fn);
        return this;
    }
    execute(value) {
      return this.functions.reduce((acc, curr) => {
        console.log(curr(acc))
         return curr(acc)
      }, value)
    }
}

// Example usage:
const pipe = new Pipe();

// Add functions to the pipe
pipe.add(value => value * 2);
pipe.add(value => value + 3);
pipe.add(value => value - 5);

// Execute the pipe with an initial value
const result = pipe.execute(10); // Output: ((10 * 2) + 3) - 5 = 18
console.log('Result:', result);
