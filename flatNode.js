const root = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 5,
                },
            ],
        }, {
            value: 3,
        }, {
            value: 4,
            children: [
                {
                    value: 6,
                }
            ],
        },
    ]
};

let ans = [];

function flattenTree(node) {
    if (node.value) {
        ans.push(node.value);
    }
    if (node.children) {
        node.children.map((x, ind) => flattenTree(x));
    }
}

flattenTree(root);
console.log(ans);
