let number;
for (var i = 0; i < 5; i++) {
    number = i;
    setTimeout(function () {
        console.log(number);
    }, 1000);
}