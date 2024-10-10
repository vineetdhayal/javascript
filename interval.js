function mySetInterval(callback, delay) {
    let timerId; // To store the timeout ID
    let isCleared = false; // To track whether the interval is cleared

    function interval() {
        // Check if the interval is cleared before calling the callback
        if (isCleared) return;

        // Execute the callback function
        callback();

        // Recursively call setTimeout to mimic setInterval behavior
        timerId = setTimeout(interval, delay);
    }

    // Start the first timer
    timerId = setTimeout(interval, delay);

    // Return a function to clear the interval
    return function () {
        isCleared = true;  // Set flag to stop future executions
        clearTimeout(timerId);  // Clear the current timeout
    };
}

// Example usage
let count = 0;
let clearMyInterval = mySetInterval(() => {
    console.log(`Count: ${count}`);
    count++;

    // Clear the interval after 5 iterations
    if (count === 5) {
        clearMyInterval();  // This will stop further executions
        console.log('Interval cleared!');
    }
}, 1000);
