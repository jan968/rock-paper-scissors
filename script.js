"use strict";

// 1. Computer choosing

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

// 2. Get user input
const getHumanChoice = () => prompt("Rock, paper, or scissors?");

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();


// 3. Play one round
    function playRound (computerChoice, humanChoice) {

        const computer = computerChoice.toLowerCase();
        const human = humanChoice.toLowerCase();
        let outcome;

        
        if(human === 'rock' && computer === 'paper') {
            outcome = `Computer played ${computer}, you played ${human}. You lose! ${computer} beats ${human}!`;
        } else if (human === 'rock' && computer === 'scissors') {
            outcome = `Computer played ${computer}, you played ${human}. You win! ${human} beats ${computer}!`;
        } else if (human === 'rock' && computer === 'rock') {
            outcome = `Computer played ${computer}, you played ${human}. It's a draw!`;
        } else if (human === 'paper' && computer === 'rock' ) {
            outcome = `Computer played ${computer}, you played ${human}. You win! ${human} beats ${computer}!`;
        } else if (human === 'paper' && computer === 'scissors' ) {
            outcome = `Computer played ${computer}, you played ${human}. You lose! ${computer} beats ${human}!`;
        } else if (human === 'paper' && computer === 'paper') {
            outcome = `Computer played ${computer}, you played ${human}. It's a draw!`;
        } else if (human === 'scissors' && computer === 'rock' ) {
            outcome = `Computer played ${computer}, you played ${human}. You lose! ${computer} beats ${human}!`;
        } else if (human === 'scissors' && computer === 'paper') {
            outcome = `Computer played ${computer}, you played ${human}. You win! ${human} beats ${computer}!`;
        } else if (human === 'scissors' && computer === 'scissors') {
            outcome = `Computer played ${computer}, you played ${human}. It's a draw!`;
        }

        return outcome;
    }

const result = playRound(computerChoice, humanChoice);
console.log(result);