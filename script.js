"use strict";

// get player choice
const getHumanChoice = () => prompt('Rock, paper or scissors?');

// get computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        default:
            return 'scissors';
    }
}

// validate player input
function validateHumanChoice(choice) {
    if (!choice) return null;

    choice = choice.trim().toLowerCase();

    if (
        choice !== 'rock' &&
        choice !== 'paper' &&
        choice !== 'scissors'
    ) {
        return null;
    }

    return choice;
}

// start the game
function playGame() {
    const rounds = 5;
    let playerScore = 0;
    let computerScore = 0;

    // play n rounds
    for (let i = 1; i <= rounds; i++) {

        const playerChoice = getHumanChoice();

        const validPlayerChoice = validateHumanChoice(playerChoice);


        const computerChoice = getComputerChoice();
        console.log('Round ' + i)
        console.log(playRound(validPlayerChoice, computerChoice));
        console.log('-'.repeat(70));
    }

    // play one round
    function playRound(playerChoice, computerChoice) {
        if (!playerChoice) return "Invalid choice. Round skipped.";

        // capitalize the first letter so the choices read better 
        const playerDisplay = playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
        const computerDisplay = computerChoice[0].toUpperCase() + computerChoice.slice(1).toLowerCase();

        // determine the round result
        if (playerChoice === computerChoice) {
            return `You played ${playerChoice}, computer played ${computerChoice}. It's a draw!`;
        } else if (
            playerChoice === 'rock' && computerChoice === 'scissors' ||
            playerChoice === 'scissors' && computerChoice === 'paper' ||
            playerChoice === 'paper' && computerChoice === 'rock'
        ) {
            playerScore++;
            return `You played ${playerChoice}, computer played ${computerChoice}. You win! ${playerDisplay} beats ${computerChoice}.`;
        } else {
            computerScore++;
            return `You played ${playerChoice}, computer played ${computerChoice}. You lose! ${computerDisplay} beats ${playerChoice}.`;
        }
    }

    // check final score
    if (playerScore > computerScore) {
        console.log(`You win the game! Your score: ${playerScore} | Computer: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose the game! Your score: ${playerScore} | Computer: ${computerScore}`);
    } else {
        console.log(`It's a draw! Your score: ${playerScore} | Computer: ${computerScore}`);
    }

}

playGame(); 