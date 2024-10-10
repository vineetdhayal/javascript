class user {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}

let User = new user("vineet");

User.sayHi();
