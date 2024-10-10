class local {
    constructor() {
        this.store = new Map();
    }
    setItem = (key, value) => {
        this.store.set(key, value);
    };
    getitem = (key) => {
        return this.store.get(key);
    }
}

const l = new local();
l.setItem('ews', 1000);
const y = l.getitem('ews');
console.log(y);
