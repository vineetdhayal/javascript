let timerId = setTimeout(function click() {
    console.log('hey');
 timerId = setTimeout(click, 1000);
}, 1000);

clearTimeout(timerId, 20000);
