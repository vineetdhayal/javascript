const library = (function () {
    function getStartTimer() {
        return {
            start() {
                console.log('timer started');
            },
            stop() {
                console.log('timer stopped');
            }
        }
    }

    return getStartTimer;
})()

// Create a timer instance
const t1 = library.getStartTimer();
console.log(t1); // Output: Timer object with start and stop methods
t1.start();      // Output: Timer started
t1.stop();       // Output: Timer stopped

const t2 = library.getStartTimer();
console.log(t2); // Output: Timer object with start and stop methods
t2.start();      // Output: Timer started
t2.stop();       // Output: Timer stopped
