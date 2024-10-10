function getTextBetweenTwoNodes(node1, node2) {
    let result = [];
    function dfs(node) {
        while (node) {
            if (node === node2) {
                break;
            }
            if (node.nodeType === 3) {
                result.push(node.textContent);
            }
            if (node.nextSibling) {
                node = node.nextSibling;
            }
            else if(!node.nextSibling && node.parentNode) {
                node = node.parentNode;
            }
        }
    }
    dfs(node1);
}

const node1 = document.querySelector('h2');  // The <h2> element
const node2 = document.querySelector('p');

const result = getTextBetweenTwoNodes(node1, node2);
console.log(result);