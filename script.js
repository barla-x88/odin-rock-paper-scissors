"use strict";

//avilable options that can be choosen
const optionsArray = ["rock", "scissors", "paper"];

//return an interger between given range including max and min
const getRandomNumber = (max, min) =>
  Math.round(Math.random() * (max - min)) + min;

//returns random choice from optionsArray
const getComputerChoice = () => optionsArray[getRandomNumber(2, 0)];

//determines winner
const playRound = (computerSelection, playerSelection) => {
  playerSelection = playerSelection.toLowerCase();

  const playerIndex = optionsArray.indexOf(playerSelection);
  const computerIndex = optionsArray.indexOf(computerSelection);

  let isPlayerWinner;

  if (playerIndex < computerIndex) isPlayerWinner = true;
  if (playerIndex - computerIndex === 1) isPlayerWinner = false;
  if (playerIndex - computerIndex === 2) isPlayerWinner = true;
  if (playerIndex - computerIndex === -2) isPlayerWinner = false;

  if (playerIndex === computerIndex) return "DRAW";

  if (isPlayerWinner)
    return `You Won! ${playerSelection} beats ${computerSelection}`;

  return `You lost! ${computerSelection} beats ${playerSelection}`;
};

const game = () => {
  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt("Enter your choice");

    const result = playRound(getComputerChoice(), playerSelection);
    console.log(result);
  }
};

game();
