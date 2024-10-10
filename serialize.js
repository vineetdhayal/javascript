function serialize(element, depth) {
    let right = '';
    for (let x = 0; x < depth; x++) {
        right = right + '\t';
    }
    let str = '';
    if (!element.children) {
        str += element.tag ? right + '<' + element.tag + '>' : right + element
    }
    if (element.children) {
        for (const el of element.children) {
            str += element.tag ? right + '<' + element.tag + '>' : right + element;
            str += serialize(el, depth + 1);
            str += '</' + element.tag + '>';
        }
    }
    // console.log(str + '</' + element.tag + '>');
    // if (element.tag) {
    //     return str + '</' + element.tag + '>'
    // }
    return str;
}

function serializeHTML(element) {
    return serialize(element, 0);
}

const tree = {
    tag: 'body',
    children: [
        { tag: 'div', children: [{ tag: 'span', children: ['foo', 'bar'] }] },
        { tag: 'div', children: ['baz'] },
    ],
};

console.log(serializeHTML(tree));