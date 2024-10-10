
const row = document.getElementById('row');
const col = document.getElementById('column');

let totalRows, totalColumns;

row.addEventListener('change', (e) => {
    totalRows = e.target.value;
});

col.addEventListener('change', (e) => {
    totalColumns = e.target.value;
})

const z = document.getElementById('form');
z.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('zzz');
    const cl = document.querySelector('.table');
    if (totalColumns && totalRows) {
        console.log(totalColumns, totalRows);
        for (let i = 0; i < totalRows; i++) {
            let x = 1;
            const el = document.createElement('tr');
            for (let j = 0; j < totalColumns; j++) {
                const elNew = document.createElement('td');
                elNew.textContent = totalColumns % 2 === 0 ? totalRows * j + (i + 1) : totalRows * (j + 1) - i;
                elNew.classList.add('center');
                console.log(elNew, el);
                el.appendChild(elNew);
            }
            console.log(cl);
            cl.appendChild(el);
        }
    }

    console.log(cl);
});
