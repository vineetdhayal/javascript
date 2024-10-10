
function classNames() {
    // write your code here
    let ans = '';
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] && typeof arguments[i] !== 'object') {
            ans = ans.length ? ans + ' ' + arguments[i] : ans + arguments[i];
        }
        else if (Array.isArray(arguments[i])) {
            ans = ans + ' ' + classNames(...arguments[i]);
        }
        else if (arguments[i]) {
            Object.entries(arguments[i]).forEach(([key, value]) => {
                if (value) {
                    ans = ans.length ? ans + ' ' + key : ans + key;
                }
            });
        }
    }
    console.log(ans);
    return ans;
}

var arr = ['b', { c: true, d: false }];
classNames('a', arr);


classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

// Arrays are recursively flattened
var arr = ['b', { c: true, d: false }];
classNames('a', arr); // => 'a b c'