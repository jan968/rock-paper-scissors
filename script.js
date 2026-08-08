"use strict";

function getComputerChoice() {
   const randomNumber = Math.floor(Math.random()*3);
   
   if(randomNumber === 0) {
    return 'Rock';
   } else if (randomNumber === 1) {
    return 'Paper';
   } else {
    return 'Scissors';
   }
}

const getHumanChoice = () => prompt("Rock, paper, or scissors?");

function playGame() {
   let playerScore = 0;
   let computerScore = 0;
   const rounds = 5;

   for(let i = 0; i<rounds; i++) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
   }

    function playRound (humanChoice, computerChoice) {

            const computer = computerChoice.toLowerCase();
            const human = humanChoice.toLowerCase();
            let outcome;
        
            if(human === 'rock' && computer === 'paper') {
                outcome = `Computer played ${computer}, you played ${human}. You lose! ${computer} beats ${human}!`;
                computerScore++;
            } else if (human === 'rock' && computer === 'scissors') {
                outcome = `Computer played ${computer}, you played ${human}. You win! ${human} beats ${computer}!`;
                playerScore++;
            } else if (human === 'rock' && computer === 'rock') {
                outcome = `Computer played ${computer}, you played ${human}. It's a draw!`;
            } else if (human === 'paper' && computer === 'rock' ) {
                outcome = `Computer played ${computer}, you played ${human}. You win! ${human} beats ${computer}!`;
                playerScore++;
            } else if (human === 'paper' && computer === 'scissors' ) {
                outcome = `Computer played ${computer}, you played ${human}. You lose! ${computer} beats ${human}!`;
                computerScore++;
            } else if (human === 'paper' && computer === 'paper') {
                outcome = `Computer played ${computer}, you played ${human}. It's a draw!`;
            } else if (human === 'scissors' && computer === 'rock' ) {
                outcome = `Computer played ${computer}, you played ${human}. You lose! ${computer} beats ${human}!`;
                computerScore++;
            } else if (human === 'scissors' && computer === 'paper') {
                outcome = `Computer played ${computer}, you played ${human}. You win! ${human} beats ${computer}!`;
                playerScore++;
            } else if (human === 'scissors' && computer === 'scissors') {
                outcome = `Computer played ${computer}, you played ${human}. It's a draw!`;
            }

            return outcome;
    }

            console.log('-'.repeat(12));

            console.log(`Final score:
Human: ${playerScore} 
Computer: ${computerScore}`);

            if(playerScore > computerScore) {
                console.log('Player wins');
            } else if (playerScore < computerScore) {
                console.log('Computer wins');
            } else {
                console.log('It\'s a draw');
            }

            console.log('-'.repeat(12));

}

playGame();