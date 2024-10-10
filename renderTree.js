const data = [{
    name: 'root',
    type: 'folder',
    children: [
        {
            name: 'folder1',
            type: 'folder',
            children: [
                { name: 'file1.txt', type: 'file' },
                { name: 'file2.txt', type: 'file' },
            ],
        },
        {
            name: 'folder2',
            type: 'folder',
            children: [
                {
                    name: 'subfolder',
                    type: 'folder',
                    children: [{ name: 'file3.txt', type: 'file' }],
                },
                { name: 'file4.txt', type: 'file' },
            ],
        },
        { name: 'file5.txt', type: 'file' },
    ],
}];

function renderTree(data, parentElement) {
    const ul = document.createElement('ul');
    parentElement.appendChild(ul);

    console.log(data);

    data.forEach((item) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = item.name;
        span.className = item.type;
        li.appendChild(span);
        ul.appendChild(li);

        if (item.children && item.children.length > 0) {
            renderTree(item.children, li);
        }
    })
}

const parentElement = document.getElementById('tree');
console.log(parentElement);
renderTree([data], parentElement)
