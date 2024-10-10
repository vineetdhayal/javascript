const people = [
    { name: 'adri' },
    { name: 'becky' },
    { name: 'chris' },
    { name: 'dillon' },
    { name: 'evan' },
    { name: 'frank' },
    { name: 'georgette' },
    { name: 'hugh' },
    { name: 'igor' },
    { name: 'jacoby' },
    { name: 'kristina' },
    { name: 'lemony' },
    { name: 'matilda' },
    { name: 'nile' },
    { name: 'ophelia' },
    { name: 'patrick' },
    { name: 'quincy' },
    { name: 'roslyn' },
    { name: 'solene' },
    { name: 'timothy' },
    { name: 'uff' },
    { name: 'violet' },
    { name: 'wyatt' },
    { name: 'x' },
    { name: 'yadri' },
    { name: 'zack' },
];

function debounce(fn, timer = 500) {
    let timeout;
    return () => {
        if (timeout) {
            clearTimeout(timeout);
        }
        setTimeout(() => { fn }, timer);
    }
}

const searchInput = document.querySelector('.input');

const clearButton = document.getElementById('clear');

const list = document.getElementById('results');

function setResults(results) {
    console.log(results);
    for (const person of results) {
        const el = document.createElement('li');
        console.log(el.classList);
        el.classList.add('.result-item');
        el.textContent = person.name;
        list.appendChild(el);
    }
}

searchInput.addEventListener('input', (e) => {
    clearChild();
    const value = e.target.value;
    e.preventDefault();
    let y = debounce(setResults(people.filter((p) => p.name.includes(value))));
    y();
});

function clearChild() {
    while (list.hasChildNodes()) {
        list.removeChild();
    }
}

clearButton.addEventListener('click', () => {
    clearChild();
});
