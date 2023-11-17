
let weapons;

let playerScore;

let computerScore;

let rounds;

let scoreboard = document.querySelector('.scoreboard');

let rdn = document.querySelector('.rnd');

let result = document.createElement('p');

let message = document.createElement('p');

let playScoreboard = document.createElement("p");

let computeScoreboard = document.createElement("p");

let playerSelection;

let computerSelection;

let arena = document.querySelector('.arena');

let gameBoard = document.querySelector('.gameBoard');

let startBtn = document.createElement('button');
startBtn.setAttribute('class', 'startBtn');
startBtn.innerText = "Start Game";
startBtn.addEventListener('click', startGame);

let playBtn = document.createElement('button');
playBtn.setAttribute('class', 'playBtn');
playBtn.innerText = "Play Again";
playBtn.addEventListener('click', startGame)

gameBoard.appendChild(startBtn);

function startGame() {

    message.innerText = ''
    playerScore = 0;
    computerScore = 0;
    rounds = 0;

    playScoreboard.innerText = `Player Score: ${playerScore}`;

    computeScoreboard.innerText = `Computer Score: ${computerScore}`;

    rdn.innerText = "Play Round 1";

    scoreboard.appendChild(playScoreboard);
    scoreboard.appendChild(computeScoreboard);

    createWeapons();
}


function createWeapons() {
    if (document.querySelector('.startBtn')){
        gameBoard.removeChild(startBtn);
    };

    if (document.querySelector(".playBtn")) {
        gameBoard.removeChild(playBtn);
    };
    
    weapons = document.createElement('div');
    weapons.textContent = "Select Your Weapon:";
    
    let rock = document.createElement('button');
    rock.setAttribute('value', 'rock')
    rock.innerText = "Rock";
    rock.addEventListener('click', weaponClick )
    
    let paper = document.createElement('button');
    paper.setAttribute("value", "paper");
    paper.innerText = "Paper";
    paper.addEventListener("click", weaponClick);
    
    let scissors = document.createElement('button');
    scissors.setAttribute("value", "scissors");
    scissors.innerText = 'Scissors';
    scissors.addEventListener("click", weaponClick);
    
    weapons.append(rock, paper, scissors);
    
    gameBoard.appendChild(weapons)
}

function weaponClick(e) {
    playerSelection = e.target.value;

    computerSelection = getComputerChoice();

    round(playerSelection, computerSelection);
};

function getComputerChoice() {
    let hand = ["rock", "paper", "scissors"];
    return hand[Math.floor((Math.random() * hand.length))];
};

function gameOver() {
    if (playerScore == computerScore) {
        message.innerText =
        `You played ${playerSelection}.` +
        "\n" +
        `The computer played ${computerSelection}.` +
        "\n" +
        `${result.textContent}` +
        "\n" +
        "The Match is a draw!";
    } else {
        playerScore > computerScore ? playerWins() : computerWins();
    };
    rdn.textContent = "Match Complete!";
    gameBoard.removeChild(weapons);
    gameBoard.appendChild(playBtn);
};

function playerWins() {
    message.innerText =
        `You played ${playerSelection}.` +
        "\n" +
        `The computer played ${computerSelection}.` +
        "\n" +
        `${result.textContent}` + 
        "\n" +
        "Congratulations, You Win the match!";
    
};

function computerWins() {
    message.innerText =
        `You played ${playerSelection}.` +
        "\n" +
        `The computer played ${computerSelection}.` +
        "\n" +
        `${result.textContent}` +
        "\n" +
        "WOMP WOMP! You lost the match!";
    
};

function round(playerSelection, computerSelection) {

    let userSelection = playerSelection.toLowerCase();

    if (userSelection == computerSelection ) {    
        result.textContent = `Round ${rounds + 1} is a Tie`;

    } else if (userSelection == "rock") {
        if (computerSelection == "scissors") {
            result.textContent =
                `You Won Round ${rounds + 1}! You snapped those snips`;

        } else {
            result.textContent =
                `You Lost Round ${rounds + 1}! AI Overlord Wins!`;
        }

    } else if (userSelection == "paper") {
        if (computerSelection == "rock") {
            result.textContent =
                `You Won Round ${rounds + 1}! You Buried that Rock!`;

        } else {
            result.textContent =
                `You Lost Round ${rounds + 1}! Like a surgeon, hey!`;
        }

    } else if (userSelection == "scissors") {
        if (computerSelection == "paper") {
            result.textContent = `You Won Round ${rounds + 1}!! Sharpest Tool in the Shed!`; 
        } else {
            result.textContent = `You Lost Round ${rounds + 1}! Your Scissors have been smashed`;
        }
    };

    message.innerText =
        `You played ${playerSelection}.` +
        "\n" + `The computer played ${computerSelection}.` +
        "\n" + `${result.textContent}`; 

    arena.prepend(message)
    
    updateScore(result);
};


function updateScore(result){
    if (result.textContent.includes("Tie")) {
        ++rounds;
        rdn.textContent = `Play Round ${rounds + 1}`;
        if (rounds >= 5) { 
            gameOver();
        };
    } else if (result.textContent.includes("Won")) {
        ++playerScore;
        ++rounds;
        rdn.textContent = `Play Round ${rounds + 1}`;
        playScoreboard.textContent = `Player Score ${playerScore}`;
        if (rounds >= 5) {
            gameOver();
        }; 
    } else {
        ++computerScore;
        ++rounds;
        rdn.textContent = `Play Round ${rounds + 1}`;
        computeScoreboard.textContent = `Computer Score ${computerScore}`;
        if (rounds >= 5) {
            gameOver();
        };
    }
};

