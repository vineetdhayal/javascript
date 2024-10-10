// classNames('foo', 'foo'); // 'foo'
// classNames({ foo: true }, { foo: true }); // 'foo'
// classNames({ foo: true, bar: true }, { foo: false }); // 'bar'
// classNames('foo', () => 'bar'); // 'foo bar'
// classNames('foo', () => 'foo'); // 'foo'

function classNames(...args) {
    const classes = new Set();
    function getClassNames(...args) {
        args.forEach((arg) => {
            if (!arg) {
                return;
            }
            if (typeof arg === 'string' || typeof arg === 'number') {
                classes.add(String(arg));
                return;
            }
            if (typeof arg === 'function') {
                const result = arg();
                if (!result) {
                    return;
                }
                classes.add(String(arg));
            }
            if (Array.isArray(arg)) {
                for (const cls of arg) {
                    getClassNames(cls);
                }
                return;
            }
            if (typeof arg === 'object') {
                for (let key in arg) {
                    if (Object.hasOwnProperty(arg, key)) {
                        arg[key] ? classes.add(key) : classes.remove(key);
                    }
                }
                return;
            }
        })
    }
    getClassNames(args);
}
