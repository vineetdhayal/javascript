export default function identicalDOMTrees(nodeA, nodeB) {
    if (nodeA.nodeType !== nodeB.nodeType) {
        return false;
    }
    if (nodeA.nodeType === 3 && nodeB.nodeType === 3) {
        return nodeA.textContent === nodeB.textContent;
    }
    if (nodeA.tagName !== nodeB.tagName) {
        return false;
    }
    if (nodeA.childNodes.length !== nodeB.childNodes.length) {
        return false;
    }
    if (nodeA.attributes.length !== nodeB.attributes.length) {
        return false;
    }

    const hasSameAttrs = nodeA.getAttributeNames().every((attr => nodeA.getAttribute(attr) === nodeB.getAttribute(attr)));
    if (!hasSameAttrs) {
        return false;
    }
    return nodeA.childNodes.every((child, index) => identicalDOMTrees(child, nodeB.childNodes[index]))
}
