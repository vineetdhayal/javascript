function groupBy(collection, property) {
    // write your answer here
    let mp = {};
    for (let i = 0; i < collection.length; i++) {
        let key;
        if (typeof property === 'string') {
            let arr = property.split('.');
            let ans = collection[i];
            for (let k = 0; k < arr.length; k++) {
                ans = ans[arr[k]];
            }
            key = ans;
        }
        else {
            key = property(collection[i]);
        }
        mp[key] ? mp[key].push(collection[i]) : mp[key] = [collection[i]];
    }

    return mp;
}

// _.groupBy(collection, [iteratee=_.identity])
_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
 
// The `_.property` iteratee shorthand.
_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }