const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

document.addEventListener('DOMContentLoaded', () => {
    btn.addEventListener('click', () => {
        console.log('called');
        modal.style.display = 'block';
    })

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    })

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    })
})
