let main = document.querySelector('#parent');
const inputs = document.querySelectorAll('input');

let ans = {};

function addToObject(value, ans, text) {
    let ind = value.indexOf('.');
    if (ind !== -1) {
        if (ans[value.slice(0, ind)]) {
            addToObject(value.substring(ind + 1), ans[value.slice(0, ind)]);
        }
        else {
            ans[value.slice(0, ind)] = {};
            addToObject(value.substring(ind + 1), ans[value.slice(0, ind)]);
        }
    }
    else {
        ans[value] = text;
    }
    return ans;
}

function callMe(nameModified, valueModified) {
    for (let i = 0; i < inputs.length; i++) {
        let text = '';
        const data = inputs[i];
        const value = data.name;
        if (value == nameModified) {
            text = valueModified;
        }
        console.log(text, nameModified);
        ans = addToObject(value, ans, text);
        console.log(ans);
    }
}

main.addEventListener('change', (e) => {
    console.log(e.target);
    if (e.target.tagName === 'INPUT') {
        callMe(e.target.name, e.target.value)
    }
})