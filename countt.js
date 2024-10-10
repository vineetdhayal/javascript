const count = (() => {
    let value = 0;
    function counterFunction() {
        value++;
        console.log(value);
        return value;
    }
    counterFunction.reset = function() {
        value = 0;
    }
    return counterFunction;
})();

count();
count();
count();

count.reset();

count();
count();
