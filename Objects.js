let user = {
    name: 'hello'
};

Object.defineProperty(user, 'name', {writable: false});

user.name = "eqf";

console.log(user.name);
