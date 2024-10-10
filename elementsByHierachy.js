function getElementsByTagNameHierachy(document, tagNames) {
    const results = [];
    const tagSet = tagNames.toUpperCase().trim().split(' ');
    const lastIndex = tagSet.length - 1;
    if (tagSet.length === 0) {
        return results;
    }

    function traverse(element, index) {
        if (element === null) {
            return;
        }
        const currenttagToken = tagSet[index];
        const elementMatchesCurrTag = element.tagName === currenttagToken;
        const isLastTagName = index === lastIndex;
        if (isLastTagName && elementMatchesCurrTag) {
            results.push(element);
        }
        const nextIndex = elementMatchesCurrTag ? Math.min(index + 1, lastIndex) : index;
        for (let child of element) {
            traverse(child, nextIndex);
        }
    }

    traverse(document, 0);
}
