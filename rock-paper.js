let playerScore = 0;
let computerScore = 0;
let games = 0;
let playerSelection = prompt("Play Rock, Paper, Scissors! Pick your weapon!");

const computerSelection = getComputerChoice();

// function getPlayerChoice() {
//     playerSelection = prompt("Incorrect entry: Please type either rock, paper, or scissors");
//     round(playerSelection, computerSelection)
// }

function getComputerChoice() {
    let hand = ["rock", "paper", "scissors"];
    return hand[Math.floor((Math.random() * hand.length))];
}

function round(playerSelection, computerSelection) {
    // if (playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors") {
    //     getPlayerChoice();
    // } else {
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
        score(result);
    }


console.log(round(playerSelection, computerSelection));

function score(result){
    if (result == "It's a Tie") {
        alert(`No points awarded. Lets play round ${+playerScore} + ${+computerScore} + 1`)
    } else if (result.includes("Winner")) {
        alert
    }
};