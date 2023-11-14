let playerScore = 0;

let computerScore = 0;

let rounds = 0;

let message = document.querySelector(".message");

let rdn = document.querySelector('.rnd')

let playerSelection;

let computerSelection;


let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {

        playerSelection = e.target.value;

        computerSelection = getComputerChoice();

        round(playerSelection, computerSelection);
    })
});


function getComputerChoice() {
    let hand = ["rock", "paper", "scissors"];
    return hand[Math.floor((Math.random() * hand.length))];
};

function gameOver() {
    if (playerScore == computerScore) {
        alert("The Match is a draw!")
        // alert("Play Again?", round(playerSelection, computerSelection))
    } else {
    (playerScore > computerScore ? playerWins() : computerWins());
    }
};

function playerWins() {
    alert("Congratulations! You Win the match");
    // alert("Play Again?", round(playerSelection, computerSelection));
};

function computerWins() {
    alert("WOMP WOMP! You lost the match");
    // alert("Play Again?", round(playerSelection, computerSelection));
};

function round(playerSelection, computerSelection) {

    let userSelection = playerSelection.toLowerCase(); 

    let result = document.createElement('div')

    if (userSelection == computerSelection ) {    
        result.textContent = "It's a Tie";

    } else if (userSelection == "rock") {
        if (computerSelection == "scissors") {
            result.textContent = "Winner! You snapped those snips";

        } else {
            result.textContent = "You Lose! AI Overlord Wins!"
        }

    } else if (userSelection == "paper") {
        if (computerSelection == "rock") {
            result.textContent = "Winner! You Buried that Rock!"

        } else {
            result.textContent = "You Lose! Like a surgeon, hey!"
        }

    } else if (userSelection == "scissors") {
        if (computerSelection == "paper") {
            result.textContent = "Winner! Sharpest Tool in the Shed!" 
        } 
    }
    alert(result.textContent);
    score(result);
};



function score(result){
    if (result.textContent == "It's a Tie") {
        ++rounds; 
        alert(`No points awarded. you have ${playerScore} points and the AI has ${computerScore} points.`);
        if (rounds >= 5) { 
            gameOver();
        } else {
            alert(`Lets play round ${rounds + 1}`)
        };
    } else if (result.textContent.includes("Winner")) {
        ++playerScore;
        ++rounds;
        alert(
        `You scored 1 point, you have ${playerScore} points and the AI has ${computerScore} points`
        );
        if (rounds >= 5) {
        gameOver();
        } else {
        alert(`Lets play round ${rounds + 1}`);
        }
    } else {
        ++computerScore;
        ++rounds;
        alert(
        `The AI scored 1 point, you have ${playerScore} points and the AI has ${computerScore} points`
        );
        if (rounds >= 5) {
        gameOver();
        } else {
        alert(`Lets play round ${rounds + 1}`);
        }
    }
};

// round(playerSelection, computerSelection);