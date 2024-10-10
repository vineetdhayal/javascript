const config = [
    {
        label: 'Parent1',
        id: 1,
        children: [
            {
                label: 'Child p1.c1',
                id: 2,
                children: [
                    {
                        label: 'child.p1.c2.pq',
                        id: 7
                    }
                ]
            },
            {
                label: 'Child p1.c2',
                id: 3,
            },
            {
                label: 'Childp1.c3',
                id: 4,
            },
        ],
    },
    {
        label: 'Parent2',
        id: 5,
        children: [
            {
                label: 'Childp2.c1',
                id: 6,
            },
        ],
    },
];

const x = document.querySelectorAll('.parent');

function updateCheckbox() {
    x.forEach((y) => {
        y.addEventListener('change', function (e) {
            const checked = e.target.checked;
            const child = this.parentElement.querySelectorAll('.child');
            console.log(child, checked);
            child.forEach((x) => {
                x.checked = checked;
            })
        })
    })
}

updateCheckbox()
