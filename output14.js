(function () {
    var first = second = 5;
})();

console.log(second);

//   The answer would be 5 even though it seems as if the variable was declared within a function and can't be accessed outside of it. This is because

// var first = second = 5;
// is interpreted the following way:

// var first = second;
// second = 5;
// But second is not declared anywhere in the function with var so it is set equal to 5 in the global scope.
