document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const rollDice = document.getElementById('roll-dice');

    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = i;
        board.appendChild(cell);
    }

    console.log(getElementsByTagName('<div>'))

    const snakesAndLadders = {
        16: 6,
        47: 26,
        49: 11,
        56: 53,
        62: 19,
        64: 60,
        87: 24,
        93: 73,
        95: 75,
        98: 78,
    };

    for (let [first, second] of Object.entries(snakesAndLadders)) {
        const children = document.getElementById(first);
        children.classList.add('snake');
        const childrenn = document.getElementById(second);
        childrenn.classList.add('ladder');
    }

    let playerPosition = 0;

    function rollDicee() {
        const value = Math.floor(Math.random() * 6 + 1);
        return value;
    }

    rollDice.addEventListener('click', () => {
        const val = rollDicee();
        const newPos = playerPosition + val;
        playerPosition = snakesAndLadders[newPos] || newPos;
        updatePlayerPosition();
    })

    function updatePlayerPosition() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            cell.classList.remove('active')
        });
        document.getElementById(playerPosition).classList.add('active');
    }

    updatePlayerPosition();
})


function getElementsByTagName(tagName) {
    // write your code below
    let elements = [];
    function travserse(child) {
        if (!child) {
            return;
        }
        console.log(child.tagName.substring(1, child.tagName.length-1), tagName, 'tag name');
        if (child.tagName && child.tagName.toLowerCase() == tagName.toLowerCase()) {
            console.log('came inside');
            elements.push(child);
        }
        for (let childs of child.children) {
            travserse(childs);
        }
    }
    for (let child of document.body.children) {
        travserse(child);
    }

    return elements;
}

console.log(getElementsByTagName('div'))