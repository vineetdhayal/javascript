class TicTacToeGame {
    constructor(n, m) {
        this.rows = n;
        this.columns = m;
        this.board = new Array(this.rows).fill('');
        this.currentPlayer = 'X';
        this.playerMoveHistory = new Map([[0, []], [1, []]]);
        this.rightDiagonal = new Map();
        for (let i = 0, j = this.columns - 1; i < this.rows, j >= 0; i++, j--) {
            this.rightDiagonal.set(i, j);
        }
        this.boardContainer = document.querySelector('#board');
        this.playerContainer = document.querySelector('#player');
        this.statusContainer = document.querySelector('#status');
        this.btnPlayagain = document.querySelector('#btnPlayAgain');
    }

    init() {
        this.showBoard();
        this.bindEventListener();
    }

    getColumn(rowIndex) {
        return `${new Array(this.columns).fill('').map((col, colIndex) => `<td data-row=${rowIndex} data-column=${colIndex}></td>`).join('')}`
    }

    getBoard() {
        return this.board.map((row, rowIndex) => {
            console.log('col', this.getColumn(rowIndex));
            return `<tr>${this.getColumn(rowIndex)}</tr>`
        })
    }

    showBoard() {
        let myBoard = this.getBoard().join('');
        const body = document.querySelector('table tbody');
        body.innerHTML = myBoard;
    }

    handlePlayAgain() {

    }

    handleMove(e) {
        console.log(e.target);
        const target = e.target;
        if (e.target.innerHTML !== '') {
            return;
        }
        target.innerHTML = this.currentPlayer;
        this.currentPlayer === 'X' ? 'O' : 'X';
        
    }

    bindEventListener() {
        this.btnPlayagain.addEventListener('click', this.handlePlayAgain);
        this.boardContainer.addEventListener('click', this.handleMove);
    }
}
const game = new TicTacToeGame(3, 3);
window.addEventListener('DOMContentLoaded', () => game.init());
