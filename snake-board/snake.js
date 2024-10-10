const gameBoard = document.getElementById('game-board');

let snake = [{ x: 10, y: 10 }];
let food = { x: 30, y: 10 };

let direction = "right";

function updateGameBoard() {
    gameBoard.innerHTML = '';
    for (let i = 0; i < snake.length; i++) {
        const snakePart = document.createElement('div');
        snakePart.classList.add('snake-part');
        snakePart.style.left = snake[i].x  + 'px';
        snakePart.style.right = snake[i].y  + 'px';
        gameBoard.appendChild(snakePart);
    }

    const foodElement = document.createElement('div');
    foodElement.classList.add('food-part');
    foodElement.style.left = food.x  + 'px';
    foodElement.style.right = food.y + 'px';
    gameBoard.appendChild(foodElement);
}

function moveSnake() {
    const newHead = { x: snake[0].x, y: snake[0].y };
    switch (direction) {
        case 'down':
            newHead.y = newHead.y + 1;
            break;
        case 'up':
            newHead.y = newHead.y - 1
            break;
        case 'left':
            newHead.x = newHead.x - 1;
            break;
        case 'right':
            newHead.x = newHead.x + 1;
            break;
    }
    snake.unshift(newHead);
    console.log('snake', snake);
    if (newHead.x === food.x && newHead.y === food.y) {
        food = { x: Math.floor(Math.random() * 15), y: Math.floor(Math.random() * 15) }
    }
    else {
        snake.pop();
    }
}

function handleKeypress(e) {
    console.log(e);
    if (e.key === 'ArrowDown') {
        direction = 'down';
        return;
    }
    if (e.key === 'ArrowUp') {
        direction = 'up';
        return;
    }
    if (e.key === 'Arrowleft') {
        direction = 'left';
        return;
    }
    if (e.key === 'ArrowRight') {
        direction = 'right';
        return;
    }
}

document.addEventListener('keydown', handleKeypress);

function checkGameOver() {
    const head = snake[0];
    if (head.x < 0 || head.y < 0 || head.x >= 300 || head.y >= 300) {
        clearInterval(gameInterval);
        console.log('collision');
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x || snake[i].y === head.y) {
            clearInterval(gameInterval);
            console.log('coolided by itself');
        }
    }
}

const gameInterval = setInterval(() => {
    moveSnake();
    checkGameOver();
    updateGameBoard();
}, 300);
