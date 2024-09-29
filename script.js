const gameBoard = (function () {
    let newGameBoard = [
                    ["", " | ", "", " | ", ""],
                    ["---------"],
                    ["", " | ", "", " | ", ""],
                    ["---------"],
                    ["", " | ", "", " | ", ""]
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
    
    const setGameBoard = function (col, choice) {
        switch (col) {
            case "a":
                if (newGameBoard[0][0] === "X" || newGameBoard[0][0] === "O") {
                    alert("Occupied! Try again");
                } else {
                    newGameBoard[0][0] = choice;
                }
                break;
            case "b":
                if (newGameBoard[0][2] === "X" || newGameBoard[0][2] === "O") {
                    alert("Occupied! Try again");
                } else {
                    newGameBoard[0][2] = choice;
                }
                break;
            case "c":
                if (newGameBoard[0][4] === "X" || newGameBoard[0][4] === "O") {
                    alert("Occupied! Try again");
                } else {
                    newGameBoard[0][4] = choice;
                }
                break;
            case "d":
                if (newGameBoard[2][0] === "X" || newGameBoard[2][0] === "O") {
                    alert("Occupied! Try again");
                } else {
                    newGameBoard[2][0] = choice;
                }
                break;
            case "e":
                if (newGameBoard[2][2] === "X" || newGameBoard[2][2] === "O") {
                    alert("Occupied! Try again");
                } else {
                    newGameBoard[2][2] = choice;
                }
                break;
            case "f":
                if (newGameBoard[2][4] === "X" || newGameBoard[2][4] === "O") {
                    alert("Occupied! Try again");
                } else {
                    newGameBoard[2][4] = choice;
                }
                break;
            case "g":
                if (newGameBoard[4][0] === "X" || newGameBoard[4][0] === "O") {
                    alert("Occupied! Try again");
                } else {
                    newGameBoard[4][0] = choice;
                }
                break;
            case "h":
                if (newGameBoard[4][2] === "X" || newGameBoard[4][2] === "O") {
                    alert("Occupied! Try again");
                } else {
                    newGameBoard[4][2] = choice;
                }
                break;
            case "i":
                if (newGameBoard[4][4] === "X" || newGameBoard[4][4] === "O") {
                    alert("Occupied! Try again");
                } else {
                    newGameBoard[4][4] = choice;
                }
                break;
        }
    }

    const resetBoard = function () {
        newGameBoard = [
            ["", " | ", "", " | ", ""],
            ["---------"],
            ["", " | ", "", " | ", ""],
            ["---------"],
            ["", " | ", "", " | ", ""]
                ];
    }
    
    return { printGameBoard, getGameBoard, setGameBoard, resetBoard };
})();

const ticTacToe = (function () {
    const checkWinner = function (gameBoard, col, choice) {
        let winGame = false;
        switch (col) {
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
    let playerChoice = "";
    let playerName = "";

    function setName(name) {
        playerName = name;
    }

    function getName() {
        return playerName;
    }

    function setChoice(choice) {
        playerChoice = choice;
    }

    function getChoice() {
        return playerChoice;
    }

    return { setChoice, getChoice, setName, getName };
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

// let playerWin, aiWin;
// const player = createPlayer();
// const ai = createAI();
// let playerChoice = prompt("Choose X or O: ").toUpperCase();
// if (playerChoice === "X") {
//     player.setChoice("X");
//     ai.setChoice("O");
// } else {
//     player.setChoice("O");
//     ai.setChoice("X");
// }

// gameBoard.printGameBoard();
// const newGameBoard = gameBoard.getGameBoard();

// do {
//     let playerLetter = prompt(`Enter a letter to place ${player.getChoice()}: `);
//     gameBoard.setGameBoard(playerLetter, player.getChoice());
//     gameBoard.printGameBoard();
//     playerWin = ticTacToe.checkWinner(newGameBoard, playerLetter, player.getChoice());
//     if (playerWin) {
//         console.log("Player wins!");
//         break;
//     }

//     let aiLetter = ai.randomizeLetter();
//     console.log(`The AI places ${ai.getChoice()} on ${aiLetter}`);
//     gameBoard.setGameBoard(aiLetter, ai.getChoice());
//     gameBoard.printGameBoard();
//     aiWin = ticTacToe.checkWinner(newGameBoard, aiLetter, ai.getChoice());
//     if (aiWin) {
//         console.log("AI wins!");
//         break;
//     }

// } while (true);

const title = document.querySelector("header>h1");
const startScreen = document.querySelector("#start-screen");
const startBtn = document.querySelector(".btn.start");
const gameplayScreen = document.querySelector("#gameplay-screen");
const gameplayScreenBtn = document.querySelector(".btn-group.gameplay");
const continueBtn = document.querySelector(".btn.continue");
const restartBtn = document.querySelector(".btn.restart");
const endBtn = document.querySelector(".btn.end");
const playerOneBtnX = document.querySelector("#playerOneBtnX");
const playerOneBtnO = document.querySelector("#playerOneBtnO");
const playerTwoBtnX = document.querySelector("#playerTwoBtnX");
const playerTwoBtnO = document.querySelector("#playerTwoBtnO");
const playerOneName = document.querySelector("#playerOneName");
const playerTwoName = document.querySelector("#playerTwoName");
const playerOneDisplayName = document.querySelector("#playerOneDisplayName");
const playerTwoDisplayName = document.querySelector("#playerTwoDisplayName");
const playerOneDisplayScore = document.querySelector("#playerOneScore");
const playerTwoDisplayScore = document.querySelector("#playerTwoScore");
const col = document.querySelectorAll(".col");
let selected = false;
let isPlayer = 1;
let playerOneWin, playerTwoWin;
let playerOneScore = 0, playerTwoScore = 0;
const playerOne = createPlayer();
const playerTwo = createPlayer();
playerOneDisplayScore.textContent = playerOneScore;
playerTwoDisplayScore.textContent = playerTwoScore;

function displayGameplay() {
    startScreen.style.display = "none";
    gameplayScreen.style.display = "grid";
    playerOneDisplayName.textContent = playerOneName.value;
    playerTwoDisplayName.textContent = playerTwoName.value;
    startBtn.style.display = "none";
}

function displayStart() {
    startScreen.style.display = "grid";
    gameplayScreen.style.display = "none";
    startBtn.style.display = "none";
}

playerOneBtnX.addEventListener("click", () => {
    playerOneBtnX.classList.remove("unselected");
    playerOneBtnO.classList.add("unselected");
    playerTwoBtnX.classList.add("unselected");
    playerTwoBtnO.classList.remove("unselected");
    playerOne.setChoice(playerOneBtnX.value);
    playerTwo.setChoice(playerTwoBtnO.value);
    selected = true;
})

playerOneBtnO.addEventListener("click", () => {
    playerOneBtnO.classList.remove("unselected");
    playerOneBtnX.classList.add("unselected");
    playerTwoBtnO.classList.add("unselected");
    playerTwoBtnX.classList.remove("unselected");
    playerOne.setChoice(playerOneBtnO.value);
    playerTwo.setChoice(playerTwoBtnX.value);
    selected = true;
})

playerTwoBtnX.addEventListener("click", () => {
    playerTwoBtnX.classList.remove("unselected");
    playerTwoBtnO.classList.add("unselected");
    playerOneBtnX.classList.add("unselected");
    playerOneBtnO.classList.remove("unselected");
    playerOne.setChoice(playerOneBtnO.value);
    playerTwo.setChoice(playerTwoBtnX.value);
    selected = true;
})

playerTwoBtnO.addEventListener("click", () => {
    playerTwoBtnO.classList.remove("unselected");
    playerTwoBtnX.classList.add("unselected");
    playerOneBtnO.classList.add("unselected");
    playerOneBtnX.classList.remove("unselected");
    playerOne.setChoice(playerOneBtnX.value);
    playerTwo.setChoice(playerTwoBtnO.value);
    selected = true;
})

startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (startScreen.reportValidity() && selected === true) {
        playerOne.setName(playerOneName.value);
        playerTwo.setName(playerTwoName.value);
        displayGameplay();
        // console.log(playerOneName.value);
        // console.log(playerTwoName.value);
        console.log(playerOne.getName());
        console.log(playerOne.getChoice());
        console.log(playerTwo.getName());
        console.log(playerTwo.getChoice());
    } else {
        alert("Form is invalid, make sure to choose X or O then enter players name.");
    }
});


window.addEventListener('load', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.type === 'text' || input.type === 'password' || input.type === 'email' || input.type === 'search') {
            input.value = '';
        } else if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        }
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.blur();
    });
});

for (let i = 0; i < col.length; i++) {
    col[i].addEventListener("click", () => {
        if (isPlayer === 1 && !col[i].classList.contains("taken")) {
            gameBoard.setGameBoard(col[i].value, playerOne.getChoice());
            col[i].textContent = playerOne.getChoice();
            if (playerOne.getChoice() === "X") {
                col[i].classList.add("x-text");
            } else {
                col[i].classList.add("o-text");
            }
            col[i].classList.add("taken");
            isPlayer = 2;
            playerOneWin = ticTacToe.checkWinner(gameBoard.getGameBoard(), col[i].value, playerOne.getChoice());
            if (playerOneWin) {
                playerOneScore++;
                playerOneDisplayScore.textContent = playerOneScore;
                title.textContent = `${playerOne.getName()} Wins!`;
                gameplayScreenBtn.style.display = "flex";
            }
        } else if (isPlayer === 2 && !col[i].classList.contains("taken")) {
            gameBoard.setGameBoard(col[i].value, playerTwo.getChoice());
            col[i].textContent = playerTwo.getChoice();
            if (playerTwo.getChoice() === "X") {
                col[i].classList.add("x-text");
            } else {
                col[i].classList.add("o-text");
            }
            col[i].classList.add("taken");
            isPlayer = 1;
            playerTwoWin = ticTacToe.checkWinner(gameBoard.getGameBoard(), col[i].value, playerTwo.getChoice());
            if (playerTwoWin) {
                playerTwoScore++;
                playerTwoDisplayScore.textContent = playerTwoScore;
                title.textContent = `${playerTwo.getName()} Wins!`;
                gameplayScreenBtn.style.display = "flex";
            }
        } else {
            alert("Occupied! Try again");
        }
    })
}

continueBtn.addEventListener("click", () => {
    gameBoard.resetBoard();
    for (let i = 0; i < col.length; i++) {
        col[i].textContent = "";
        col[i].classList.remove("x-text");
        col[i].classList.remove("o-text");
        col[i].classList.remove("taken");
    }
    title.textContent = "Tic Tac Toe";
    gameplayScreenBtn.style.display = "none";
    isPlayer = 1;
})

restartBtn.addEventListener("click", () => {
    gameBoard.resetBoard();
    for (let i = 0; i < col.length; i++) {
        col[i].textContent = "";
        col[i].classList.remove("x-text");
        col[i].classList.remove("o-text");
        col[i].classList.remove("taken");
    }
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneDisplayScore.textContent = playerOneScore;
    playerTwoDisplayScore.textContent = playerTwoScore;
    title.textContent = "Tic Tac Toe";
    gameplayScreenBtn.style.display = "none";
    isPlayer = 1;
})

endBtn.addEventListener("click", () => {
    gameBoard.resetBoard();
    for (let i = 0; i < col.length; i++) {
        col[i].textContent = "";
        col[i].classList.remove("x-text");
        col[i].classList.remove("o-text");
        col[i].classList.remove("taken");
    }
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneDisplayScore.textContent = playerOneScore;
    playerTwoDisplayScore.textContent = playerTwoScore;
    title.textContent = "Tic Tac Toe";
    gameplayScreenBtn.style.display = "none";
    isPlayer = 1;
    playerOne.setChoice("");
    playerOne.setName("");
    playerTwo.setChoice("");
    playerTwo.setName("");
    displayStart();
    startBtn.style.display = "block";
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.type === 'text') {
            input.value = '';
        } else if (input.type === 'button') {
            playerOneBtnX.classList.remove("unselected");
            playerOneBtnO.classList.remove("unselected");
            playerTwoBtnX.classList.remove("unselected");
            playerTwoBtnO.classList.remove("unselected");
        }
    });
})