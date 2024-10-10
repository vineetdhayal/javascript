/**
 * @param {Element} element
 * @param {string} property
 * @param {string} value
 * @return {Array<Element>}
 */
export default function getElementsByStyle(element, property, value) {
    let answer = [];
    function traverse(item) {
        if (!item) { return; }
        const style = getComputedStyle(item);
        if (style.getPropertyValue(property) == value) {
            console.log(item.style[property], property, value);
            answer.push(item);
        }
        for (let childd of item.children) {
            traverse(childd);
        }
    }
    for (let child of element.children) {
        traverse(child);
    }
    return answer;
}
