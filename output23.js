function parseData(data) {
    /* Some computation */
    return data;
};

class User {
    constructor(name, ...data) {
        const parsedData = parseData(data);

        this.name = name;
        this.data = parsedData;

        return parsedData;
    }

    getData() {
        return this.data;
    }
}

const Yomesh = new User('Yomesh', {
    youtubeChannel: 'https://bit.ly/devtools-yt',
    shouldSubscribe: true
});

// What would be the output of the following statement?
console.log(Yomesh.getData());

// Answer would be Option 3 -- Error because Class in JavaScript is (mostly) just syntactical sugar. The underlying working is same as the constructor function. Since, in the code snippet we are creating an instance, using the new operator, but returning a non-primitive value from the constructor so implicit this will be lost and instance won't have any getData method to call.