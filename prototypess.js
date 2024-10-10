class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
    run(speed) {
        this.speed = speed;
        console.log('runs with the speed', speed);
    }
    stop() {
        this.stop = 0;
        console.log('stopped');
    }
}

class rabbit extends Animal {
    hide() {
        console.log('hidden', this.name);
    }
}

let rabbitt = new rabbit('hello');
console.log(rabbitt.run(10));
