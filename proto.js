let obj = {
    0:3,
    1:5,
    length: 2
};

obj.__proto__.join = Array.prototype.join;


console.log(obj.join(','));