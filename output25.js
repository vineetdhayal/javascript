var x = 1;
var obj = {
    x: 2,
    getX: function () {
        return console.log(this.x);
    }
};

obj.getX()
let a = obj.getX.call({ x: 2 })
console.log(a)