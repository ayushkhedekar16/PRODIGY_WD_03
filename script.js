let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function handleClick(index) {
    if (!gameOver && board[index] === '') {
        board[index] = currentPlayer;
        document.getElementById('cell' + index).textContent = currentPlayer;
        if (checkWin()) {
            gameOver = true;
            document.getElementById('status').textContent = currentPlayer + ' wins!';
        } else if (checkDraw()) {
            gameOver = true;
            document.getElementById('status').textContent = 'It\'s a draw!';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').textContent = 'Player ' + currentPlayer + '\'s turn';
        }
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return board.every(cell => cell !== '');
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    document.getElementById('status').textContent = 'Player X\'s turn';
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}
