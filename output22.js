function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(this.name);
}

var yomesh = new Person('yomesh');

console.log(yomesh.sayName());
console.log(Person.prototype.sayName());
console.log(Object.getPrototypeOf(yomesh).sayName());
console.log(yomesh.__proto__.sayName());

// Answer would be Option 2 because in the first case this === yomesh and in rest of the cases this === Person.prototype during invocation.
