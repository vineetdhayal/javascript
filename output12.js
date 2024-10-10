function Person(name, age) {
    this.name = name;
    this.age = age;
}

let displayName = function () {
    if (this && this.age) {
        console.log(`my name is ${this.name} & my age is ${this.age}.`);
    } else {
        console.log("error");
    }
};

let obj1 = new Person("A", 31);

displayName(obj1);
Person.prototype.displayName = displayName;
console.log(Person.displayName);
obj1.displayName();
let obj2 = new Person("B", 21);
let obj3 = new Person("C", 11);
let obj4 = new Person("D", 1);

displayName(obj2);
displayName(obj4);
displayName.call(obj3, obj4);
