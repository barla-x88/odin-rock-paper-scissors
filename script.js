"use strict";

const optionsArray = ["rock", "scissors", "paper"];

const getRandomNumber = (max, min) =>
  Math.round(Math.random() * (max - min)) + min;

const getComputerChoice = () => optionsArray[getRandomNumber(2, 0)];

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

  return `You ${isPlayerWinner ? "win" : "Lost"}! ${
    isPlayerWinner ? playerSelection : computerSelection
  } beats ${
    isPlayerWinner ? computerSelection : playerSelection
  }. You choose ${playerSelection}.`;
};

// console.log(playRound("rock", "scissors")); //f;
// console.log(playRound("scissors", "rock")); // t
// console.log(playRound("rock", "paper")); // t
// console.log(playRound("paper", "rock")); // f
// console.log(playRound("scissors", "paper")); // f
// console.log(playRound("paper", "scissors")); // t

const game = () => {
  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt("Enter your choice");

    const result = playRound(getComputerChoice(), playerSelection);
    console.log(result);
  }
};

game();
