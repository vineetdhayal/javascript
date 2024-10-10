function customSort(compareFn) {
    // DO NOT REMOVE
    if (!this || !this.length) {
        throw new TypeError()
    }

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (compareFn && compareFn(this[i], this[j]) > 0) {
                [this[i], this[j]] = [this[j], this[i]];
            }
            else if (String(this[i]) > String(this[j])) {
                [this[i], this[j]] = [this[j], this[i]];
            }
        }
    }

    return this;
    // write your code below
}

Array.prototype.customSort = customSort;
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);