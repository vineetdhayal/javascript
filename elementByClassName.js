function isSubset(first, second) {
    [...second].every((k) => first.contains(k));
}

function elementByClassName(element, classNames) {
    const elements = [];
    const classSet = new Set(classNames);

    function traverse(el) {
        if (el === null) {
            return;
        }
        if (isSubset(el.classList, classSet)) {
            elements.push(el);
        }
        for (const child of el.children) {
            traverse(child);
        }
    }

    for (const child of element.children) {
        traverse(child);
    }
}
