function customExpect(actual) {
    // write your solution here

    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error();
            }
        },
        not: {
            toBe: function (expected) {
                if (actual === expected) {
                    throw new Error();
                }
            }
        }
    }
}


// // Syntax
// customExpect(actual).toBe(expected);
// customExpect(actual).not.toBe(expected);


// customExpect(3).toBe(3); // no error | Do not return anything
// customExpect(2).toBe(3); // should throw an error

// customExpect(2).not.toBe(3); // no error | Do not return anything
// customExpect(2).not.toBe(2); // should throw an error