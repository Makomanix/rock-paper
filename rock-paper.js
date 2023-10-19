let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let playerSelection = prompt("Play Rock, Paper, Scissors! Pick your weapon!");

const computerSelection = getComputerChoice();

function getPlayerChoice() {
    playerSelection = prompt("Play Rock, Paper, Scissors! Pick your weapon!");
}

function getComputerChoice() {
    let hand = ["rock", "paper", "scissors"];
    return hand[Math.floor((Math.random() * hand.length))];
}

function round(playerSelection, computerSelection) {
    let userSelection = playerSelection.toLowerCase();
    let result;
    console.log(computerSelection)
    if (userSelection == computerSelection ) {
        result = "It's a Tie";
    } else if (userSelection == "rock") {
        if (computerSelection == "scissors") {
            result = "Winner! You snapped those snips"
        } else {
            result = "You Lose! AI Overlord Wins!"
        }
    } else if (userSelection == "paper") {
        if (computerSelection == "rock") {
            result = "Winner! You Buried that Rock!"
        } else {
            result = "You Lose! Like a virgin, hey!"
        }
    } else if (userSelection == "scissors") {
        if (computerSelection == "paper") {
            result = "Winner! Sharpest Tool in the Shed!" 
        } 
    }
    alert(result);
    score(result);
}



function score(result){
    if (result == "It's a Tie") {
        ++rounds;
        alert(`No points awarded. Lets play round ${rounds + 1}`)
        getPlayerChoice()
        getComputerChoice()
        round(playerSelection, getComputerChoice())
    } else if (result.includes("Winner")) {
        ++playerScore;
        ++rounds;
        alert(`You scored 1 point, you have ${playerScore} and the AI has ${computerScore}`)
        alert(`Lets play round ${rounds + 1}`)
        getPlayerChoice();
        getComputerChoice();
        round(playerSelection, getComputerChoice());
    } else {
        ++computerScore;
        ++rounds;
        alert(`The AI scored 1 point, you have ${playerScore} and the AI has ${computerScore}`);
        alert(`Lets play round ${rounds + 1}`);
        getPlayerChoice();
        getComputerChoice();
        round(playerSelection, getComputerChoice());
    }
};

console.log(round(playerSelection, computerSelection));