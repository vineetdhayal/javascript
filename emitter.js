class Emitter {
    constructor() {
        this.eventMap = new Map();
    }
    on(event, fn) {
        if (!this.eventMap.has(event)) {
            this.eventMap.set(event, [])
        }
        this.eventMap.get(event).push(fn);
    }

    off(event, fn) {
        if (this.eventMap.has(event)) {
            const callbacks = this.eventMap.get(event).filter((cb) => cb !== fn);
            this.eventMap.set(event, callbacks);
        }
    }

    emit(event, ...data) {
        if (this.eventMap.has(event)) {
            this.eventMap.get(event).forEach((cb) => {
                setTimeout(() => cb(...data), 0)
            })
        }
    }
}

const emitter = new Emitter();

const greet = (message) => console.log(`Greet: ${message}`);
const farewell = (message) => console.log(`Farewell: ${message}`);

emitter.on('hello', greet);
emitter.on('hello', greet);
emitter.on('hello', greet);
emitter.on('goodbye', farewell);

emitter.emit('hello', 'Hello, World!'); // Output -> Greet: Hello, World!
emitter.emit('goodbye', 'Goodbye, World!');
