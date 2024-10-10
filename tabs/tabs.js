const btns = document.querySelector('.tabs');
const els = document.querySelectorAll('.tabContent');
const myBtns = document.querySelectorAll('button');

btns.addEventListener('click', (e) => {
    console.log(e.target);
    const selectedVal = e.target.getAttribute('selected');
    console.log(selectedVal);
    els.forEach((el) => {
        el.style.display = 'none'
    });
    for (let k = 0; k < myBtns.length; k++) {
        console.log(myBtns[k]);
        myBtns[k].className = myBtns[k].className.replace('select', '');
    }
    const selected = document.querySelector(`.tabContent[value=${selectedVal}]`);
    const btn = document.querySelector(`button[selected=${selectedVal}]`);
    selected.style.backgroundColor = 'green';
    btn.classList.add('select');
})