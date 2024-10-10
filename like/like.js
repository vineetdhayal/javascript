const el = document.querySelector('.btn');

console.log(el);

el.addEventListener(('click'), () => {
    console.log('sasd');
    el.textContent = '🛑 Like';
    fetch('https://dummyjson.com/products').then((res) => res.json()).then((data) => {
        console.log(data);
        el.classList.add('active');
        el.textContent = 'Liked';
    })
})
