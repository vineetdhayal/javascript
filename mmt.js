var name = "mmt";
var myObject = {
  name: "myObject",
  property: this.name,
  regularFunction: function() {
    return this.name
  },
  arrowFunction: () => {
    return this.name;
  },
  iife: (function() {
    return this.name
  })()
}
 
console.log('this.name: ' + this.name);   //mmt
console.log('myObject.name: ' + myObject.name);  //myObject
console.log('myObject.property: ' + myObject.property);  //myObject
console.log('myObject.iife: '+ myObject.iife);  //undefined
console.log(myObject.regularFunction()); //myObject


const regFn = myObject.regularFunction; 
console.log('regfn.call: ' + regFn.call(myObject))  //myObject
console.log('regfn(): ' + regFn()); //undefined
console.log('regFn.call(window): ' + regFn.call(window)); //mmt
console.log('myObject.arrowFunction.call(myObject): ' + myObject.arrowFunction.call(myObject));  //mmt
console.log('myObject.arrowFunction(): ' + myObject.arrowFunction()) //mmt
console.log('myObject.arrowFunction.call(window)  ' + myObject.arrowFunction.call(window)) //mmt