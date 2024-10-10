function fetchWithAutoRetry(promise, totalRetry, currentTry = 0) {
    return promise().catch((err) => {
        if (currentTry <= totalRetry) {
            const delay = Math.pow(2, currentTry);
            console.log(`trying ${currentTry}/${totalRetry}`);
            return new Promise((resolve, reject) => {
                setTimeout(resolve, delay);
            }).then(() => fetchWithAutoRetry(promise, totalRetry, currentTry + 1));
        }
        else {
            throw err;
        }
    })
}

const errorPromise = function () {
    return new Promise((res, rej) => rej('errored'));
}

fetchWithAutoRetry(errorPromise, 3).then((data) => console.log(data)).catch((err) => console.log(err));
