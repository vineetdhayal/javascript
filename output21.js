function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
};
const yomesh = new Person('Yomesh');
console.log(yomesh.getName());

//

function Person(name) {
    this.name = name;
}
Person.prototype.getName = () => {
    return this.name;
};
const yomesh1 = new Person('Yomesh');
console.log(yomesh1.getName());