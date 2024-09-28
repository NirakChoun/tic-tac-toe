const gameBoard = (function () {
    const newGameBoard = [
                    ["a", " | ", "b", " | ", "c"],
                    ["---------"],
                    ["d", " | ", "e", " | ", "f"],
                    ["---------"],
                    ["g", " | ", "h", " | ", "i"]
                        ];
                        
    const printGameBoard = function () {
        let board = "";
        for (let i = 0; i < newGameBoard.length; i++) {
            board = board + newGameBoard[i].join("") + "\n";
        }
        console.log(board);
    }

    const getGameBoard = function () {
        return newGameBoard;
    }
    
    const setGameBoard = function (letter, choice) {
        letter = letter.toLowerCase();
        choice = choice.toUpperCase();
        switch (letter) {
            case "a":
                if (newGameBoard[0][0] === "X" || newGameBoard[0][0] === "O") {
                    console.log("Occupied! Try again");
                } else {
                    newGameBoard[0][0] = choice;
                }
                break;
            case "b":
                if (newGameBoard[0][2] === "X" || newGameBoard[0][2] === "O") {
                    console.log("Occupied! Try again");
                } else {
                    newGameBoard[0][2] = choice;
                }
                break;
            case "c":
                if (newGameBoard[0][4] === "X" || newGameBoard[0][4] === "O") {
                    console.log("Occupied! Try again");
                } else {
                    newGameBoard[0][4] = choice;
                }
                break;
            case "d":
                if (newGameBoard[2][0] === "X" || newGameBoard[2][0] === "O") {
                    console.log("Occupied! Try again");
                } else {
                    newGameBoard[2][0] = choice;
                }
                break;
            case "e":
                if (newGameBoard[2][2] === "X" || newGameBoard[2][2] === "O") {
                    console.log("Occupied! Try again");
                } else {
                    newGameBoard[2][2] = choice;
                }
                break;
            case "f":
                if (newGameBoard[2][4] === "X" || newGameBoard[2][4] === "O") {
                    console.log("Occupied! Try again");
                } else {
                    newGameBoard[2][4] = choice;
                }
                break;
            case "g":
                if (newGameBoard[4][0] === "X" || newGameBoard[4][0] === "O") {
                    console.log("Occupied! Try again");
                } else {
                    newGameBoard[4][0] = choice;
                }
                break;
            case "h":
                if (newGameBoard[4][2] === "X" || newGameBoard[4][2] === "O") {
                    console.log("Occupied! Try again");
                } else {
                    newGameBoard[4][2] = choice;
                }
                break;
            case "i":
                if (newGameBoard[4][4] === "X" || newGameBoard[4][4] === "O") {
                    console.log("Occupied! Try again");
                } else {
                    newGameBoard[4][4] = choice;
                }
                break;
        }
    }
    
    return { printGameBoard, getGameBoard, setGameBoard};
})();

const ticTacToe = (function () {
    const checkWinner = function (gameBoard, letter, choice) {
        let winGame = false;
        switch (letter) {
            case "a":
                if ((gameBoard[0][2] === choice && gameBoard[0][4] === choice) || (gameBoard[2][0] === choice && gameBoard[4][0] === choice) || (gameBoard[2][2] === choice && gameBoard[4][4] === choice)) {
                    winGame = true;
                }
                break;
            case "b":
                if ((gameBoard[0][0] === choice && gameBoard[0][4] === choice) || (gameBoard[2][2] === choice && gameBoard[4][2] === choice)) {
                    winGame = true;
                }
                break;
            case "c":
                if ((gameBoard[0][0] === choice && gameBoard[0][2] === choice) || (gameBoard[2][4] === choice && gameBoard[4][4] === choice) || (gameBoard[2][2] === choice && gameBoard[4][0] === choice)) {
                    winGame = true;
                }
                break;
            case "d":
                if ((gameBoard[0][0] === choice && gameBoard[4][0] === choice) || (gameBoard[2][2] === choice && gameBoard[2][4] === choice)) {
                    winGame = true;
                }
                break;
            case "e":
                if ((gameBoard[2][0] === choice && gameBoard[2][4] === choice) || (gameBoard[0][2] === choice && gameBoard[4][2] === choice) || (gameBoard[0][0] === choice && gameBoard[4][4] === choice) || (gameBoard[0][4] === choice && gameBoard[4][0] === choice)) {
                    winGame = true;
                }
                break;
            case "f":
                if ((gameBoard[2][0] === choice && gameBoard[2][2] === choice) || (gameBoard[0][4] === choice && gameBoard[4][4] === choice)) {
                    winGame = true;
                }
                break;
            case "g":
                if ((gameBoard[4][2] === choice && gameBoard[4][4] === choice) || (gameBoard[0][0] === choice && gameBoard[2][0] === choice) || (gameBoard[2][2] === choice && gameBoard[0][4] === choice)) {
                    winGame = true;
                }
                break;
            case "h":
                if ((gameBoard[4][0] === choice && gameBoard[4][4] === choice) || (gameBoard[0][2] === choice && gameBoard[2][2] === choice)) {
                    winGame = true;
                }
                break;
            case "i":
                if ((gameBoard[4][0] === choice && gameBoard[4][2] === choice) || (gameBoard[0][4] === choice && gameBoard[2][4] === choice) || (gameBoard[0][0] === choice && gameBoard[2][2] === choice)) {
                    winGame = true;
                }
                break;
        }
        return winGame; 
    }

    return { checkWinner };
})();

function createPlayer() {
    let playerChoice;

    function setChoice(choice) {
        playerChoice = choice;
    }

    function getChoice() {
        return playerChoice;
    }

    return { setChoice, getChoice };
}

function createAI () {
    let aiChoice;

    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

    function setChoice(choice) {
        aiChoice = choice;
    }

    function getChoice() {
        return aiChoice;
    }

    function randomizeLetter() {
        const random = Math.floor(Math.random() * 9);
        return letters[random];
    }

    return { setChoice, getChoice, randomizeLetter };
}

let playerWin, aiWin;
const player = createPlayer();
const ai = createAI();
let playerChoice = prompt("Choose X or O: ").toUpperCase();
if (playerChoice === "X") {
    player.setChoice("X");
    ai.setChoice("O");
} else {
    player.setChoice("O");
    ai.setChoice("X");
}

gameBoard.printGameBoard();
const newGameBoard = gameBoard.getGameBoard();

do {
    let playerLetter = prompt(`Enter a letter to place ${player.getChoice()}: `);
    gameBoard.setGameBoard(playerLetter, player.getChoice());
    gameBoard.printGameBoard();
    playerWin = ticTacToe.checkWinner(newGameBoard, playerLetter, player.getChoice());
    if (playerWin) {
        console.log("Player wins!");
        break;
    }

    let aiLetter = ai.randomizeLetter();
    console.log(`The AI places ${ai.getChoice()} on ${aiLetter}`);
    gameBoard.setGameBoard(aiLetter, ai.getChoice());
    gameBoard.printGameBoard();
    aiWin = ticTacToe.checkWinner(newGameBoard, aiLetter, ai.getChoice());
    if (aiWin) {
        console.log("AI wins!");
        break;
    }

} while (true);