let first = {kind: 'yes'};
let second = Object.create(first);
let third = Object.create(second);

second.name = 'vineet';

console.log(third.__proto__.__proto__);