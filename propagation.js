const first = document.getElementById('first');
first.addEventListener('click', () => {
    console.log('first clicked');
})
const second = document.getElementById('second');

second.addEventListener('click', () => {
    console.log('second clicked');
})

const third = document.getElementById('third');
third.addEventListener('click', () => {
    console.log('third clicked');
})

const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    console.log('fourth clicked');
},{capture: true})

document.querySelector('.product').addEventListener('click', (e) => {
   console.log(e.target.getAttribute('id'));
   e.target.setAttribute('id2', 'efwsd');
   console.log(e.target);
})
