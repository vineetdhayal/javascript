let pokemon = {
    first: 'dfssf',
    last: 'ewfewfew',
    getTotalName: function() {
        console.log('fwe', this);
        return this.first + '' + this.last;
    }
}

function hello(x, y) {
    console.log('this referred', this);
    console.log(this.getTotalName(), x, y);
}

hello.apply(pokemon, ['hey','here']);

// bindedFn();
