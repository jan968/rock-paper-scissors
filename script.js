"use strict";

// 1. Computer randomly chooses rock, paper, or scissors

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

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

console.log(`Computer: ${computerChoice}
Human: ${humanChoice}`);