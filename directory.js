const el = document.querySelector('.tree');
const data = {
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
};

const renderTree = (element, data) => {
    console.log(element);
    const newEl = document.createElement('ul');
    element.appendChild(newEl);

    data.forEach((z) => {
        console.log(z);
        const li = document.createElement('li');
        li.textContent = z.name;
        li.classList.add(z.type);
        newEl.appendChild(li);
        if (z.children && z.children.length) {
            renderTree(element, z.children);
        }
    })
}

const main = document.createElement('ul');
renderTree(el, [data]);
