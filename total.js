function main(n = 0) {
    return {
        sum: function (k) {
            n=n+k;
            console.log(this);
            return this;
        },
        multiply: function (k) {
            n=n*k;
            return this;
        },
        divide: function (l) {
            n=n/l;
            return this;
        },
        total: function () {
            return n;
        }
    }
}

let p = main().sum(5).multiply(10).divide(2).total();

console.log(p);
