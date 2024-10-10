const data = [
    { name: 'John', age: 28, country: 'USA' },
    { name: 'Alice', age: 24, country: 'Canada' },
    { name: 'Bob', age: 32, country: 'UK' },
    // ... more data
];

function renderTable(data) {
    console.log('new data', data);
    let body = document.querySelector('tbody');
    body.innerHTML = '';
    data.forEach(({ name, age, country }) => {
        let el = document.createElement('tr');
        let child = `<td>${name}</td> <td>${age}</td> <td>${country}</td>`
        el.innerHTML = child;
        body.appendChild(el);
    })
}

function removeChild() {
    let body = document.querySelector('tbody');
    console.log(body);
    while (body.hasChildNodes()) {
        console.log('came inside');
        body.removeChild();
        console.log(body.childNodes);
    }

    body.innerHTML = '';

    console.log(body, 'body');
}

function searchAndRender(query) {
    const filteredItems = data.filter((d) => {
        return d.name.toLowerCase().includes(query) || d.country.toLowerCase().includes(query);
    })

    console.log('filter', filteredItems);
    // removeChild();
    renderTable(filteredItems);
}

const search = document.getElementById('searchInput');

search.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    searchAndRender(query);
});

renderTable(data);

const sort = document.querySelectorAll('th[data-sort]');
console.log(sort);

function sortAndRenderData(value) {
    const sortedData = data.sort((d1, d2) => d1[value] > d2[value] ? 1 : -1);

    console.log('sortedData', sortedData);
    renderTable(sortedData);
}

sort.forEach((z) => {
    z.addEventListener('click', () => {
        console.log('clicked');
        console.log(z.attributes[0].value, 'attribute');

        sortAndRenderData(z.attributes[0].value);
    })
})
