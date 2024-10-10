const btns = document.querySelector('.button-container');

function call() {
    for (let i = 0; i < 100; i++) {
        const btn = document.createElement('button');
        btn.setAttribute('value', i);
        btn.innerText = i;
        btns.appendChild(btn);
    }
    btns.addEventListener('click', (e) => {
        console.log(e.target.getAttribute('value'));
    })
}

call();