const right = document.querySelector('.right');
const left = document.querySelector('.left');

let category = [];

function setData(response) {
    right.innerHTML = '';
    response.forEach((p) => {
        const newEl = document.createElement('div');
        const img = document.createElement('img');
        img.src = p.image;
        img.style.height = 200 + 'px';
        img.style.width = 200 + 'px';
        img.style.objectFit = 'cover';
        const price = document.createElement('span');
        price.innerHTML = p.price;
        newEl.appendChild(img);
        newEl.appendChild(price);
        right.appendChild(newEl);
    })
}

async function fetchData() {
    const products = await fetch('https://fakestoreapi.com/products');
    const response = await products.json();
    const category = [...new Set(response.map((x) => x.category))];
    console.log(category);

    setData(response);

    category.forEach((c) => {
        let div = document.createElement('div');
        let check = document.createElement('input');
        let label = document.createElement('label');
        check.type = 'checkbox';
        check.checked = true;
        check.classList.add('checked');
        check.setAttribute('value', c);
        label.innerText = c;
        div.appendChild(check);
        div.appendChild(label);
        left.appendChild(div);
    })

    const check = document.querySelectorAll('.checked');
    left.addEventListener('click', (e) => {
        let total = [];
        check.forEach((p) => {
            if (p.checked) {
                total.push(p.value);
            }
        });
        setData(response.filter(c => total.includes(c.category)));
    })
}

fetchData();
