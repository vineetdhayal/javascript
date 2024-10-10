const x = document.querySelectorAll('.draggable');
console.log(x);

x.forEach((z) => {
    console.log(z);

    z.addEventListener('dragstart', () => {
        z.classList.add('dragging');
        console.log(z);
    })

    z.addEventListener('dragend', () => {
        z.classList.remove('dragging');
    })
})

const c = document.querySelectorAll('.container');
c.forEach((x) => {
    x.addEventListener('dragover', () => {
       const draggedElemnt = document.querySelector('.dragging');
       x.appendChild(draggedElemnt);
    })
})
