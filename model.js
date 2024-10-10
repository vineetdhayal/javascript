
const input = document.createElement('input');
const state = { value: 'Hi' };

function model(state, input) {
    Object.defineProperty(state, 'value', {
        get: () => {
            return state.value;
        },
        set: (newVal) => {
            input.value = newVal;
        }
    })
    input.addEventListener('change', (e) => {
        console.log(e, state);
        input.value = e.target.value;
        if (state.value !== e.target.value) {
            state.value = e.target.value;
        }
    })
}

model(state, input);

console.log(input.value);
state.value = 'dev';
console.log(input.value);
input.value = 'cwefe';
input.dispatchEvent(new Event('change'));
console.log(state.value);
