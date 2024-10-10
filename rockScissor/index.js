let us = 0;
let cs = 0;

const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');

const scoreBoard = document.querySelector('.score-board');
const results = document.querySelector('.results > p');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

function computer() {
    const arr = ['rock', 'paper', 'scissor'];
    let random = Math.floor(Math.random() * 3);
    return arr[random];
}

function win() {
    us = us + 1;
    userScore.innerHTML = us;
    results.innerHTML = 'user wins';
}


function game(userChoice) {
    const computerChoice = computer();
    switch (userChoice + computerChoice) {
        case 'rockpaper':
            win();
    }
}

function main() {
    rock.addEventListener('click', () => {
        game('rock');
    })
    paper.addEventListener('click', () => {
        game('paper');
    })
    scissor.addEventListener('click', () => {
        game('scissor');
    })
}

main();