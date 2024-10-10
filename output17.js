let a = true;
setTimeout(() => {
  a = false;
}, 2000)


while(a) {
  console.log(' -- inside whilee -- ');
}


// Output: — — inside while — — (infinite times)
// Explanation: JavaScript is synchronous by nature, it executes the code using the Call Stack & the call stack waits for nothing. To execute the asynchronous tasks, we have a callback queue which contains all the callbacks wanting to get executed. The event loop takes them one by one & pushes them in Call Stack only when the callstack is not executing anything.
// Now, in the above question, we have a while loop in our call stack which is an infinite loop. After 2 seconds, the setTimeout callback is ready and waiting to get executed, but since the call stack is not idle, so the setTimeout callback will never get a chance to get executed.

function foo() {
    return "I'm the outer function";
  };
  
  
  function test() {
    console.log(bar);
    return foo();
    var bar = "I'm a variable";
    function foo() {
      return "I'm the inner function";
    }
  }
  console.log(test());

//

  async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
    await new Promise(resolve => setTimeout(resolve, 0));
    console.log("C");
  }
  
  console.log("D");
  foo();
  console.log("E");

  //
  
  console.log([11, 2, 31] + [4, 5, 6]);
  console.log([] != ![]);

  //
   function sum(a=5, b=7){
    return a+b;
}
console.log(sum(undefined, 20));