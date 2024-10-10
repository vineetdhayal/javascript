function processing() {
    return new Promise((resolve, reject) => {
        resolve(1);
        reject("Failed");
        resolve(2);
        console.log("After resolve/reject");
    });
}

function init() {
    processing()
        .then((v) => console.log(v + 1))
        .catch((err) => console.log(err));
}

init();

//   Answer would be Option 3 because resolve and reject doesn't work like return. Even if they are called, the function completes its execution. Hence, console.log will be called even though resolve/reject is already invoked before and .then callback will be called after that. Yes, resolve/reject will be called once as per order of invocation.

// P.S. There is an exception and we will discuss that in further questions.