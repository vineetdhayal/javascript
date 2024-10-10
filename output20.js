function sayName() {
    setTimeout(() => {
        console.log(this.name);
    }, 1000);
}
sayName.call({
    name: 'Yomesh'
});