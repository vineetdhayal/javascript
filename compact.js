// compact([0, 1, false, 2, '', 3, null]); // => [1, 2, 3]
// compact({ foo: true, bar: null }); // => { foo: true }

export default function compact(value) {
    if (typeof value !== 'object' || value == null) {
        return value;
    }
    if (Array.isArray(value)) {
        let ans = [];
        value.forEach((x) =>if (x) {
            ans.push(compact(x));
        })
        return ans;
    }
    else if (typeof value === 'object') {
        let ans = {};
        for (let key in value) {
            if (value[key]) {
                ans[key] = compact(value[key]);
            }
        }
        return ans;
    }
}