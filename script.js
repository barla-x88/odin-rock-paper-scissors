'use strict';
const container = document.querySelector('.flex-container');
const resultContainer = document.querySelector('#result-container');
const overlay = document.querySelector('.overlay');
let playerScore = 0;
let computerScore = 0;

//avilable options that can be choosen
const optionsArray = ['rock', 'scissors', 'paper'];

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

  if (playerIndex === computerIndex) return 'DRAW';

  if (isPlayerWinner) {
    playerScore += 1;
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  }

  computerScore += 1;
  return `You lost! ${computerSelection} beats ${playerSelection}`;
};

container.addEventListener('click', (e) => {
  const element = e.target.closest('.flex-content');
  if (!element) return;
  const result = playRound(getComputerChoice(), element.dataset.choice);
  resultContainer.textContent = result;
  element.classList.add('active');

  setTimeout(() => {
    element.classList.remove('active');
  }, 200);

  setTimeout(() => {
    resultContainer.innerHTML =
      playerScore >= 5 || computerScore >= 5
        ? '<button id="playAgain" onclick="playAgain()">Play Again</button>'
        : 'Choose an Option';
  }, 1500);

  document.querySelector('#scores-player').textContent = playerScore;
  document.querySelector('#scores-computer').textContent = computerScore;

  if (playerScore >= 5 || computerScore >= 5) {
    overlay.classList.toggle('show-overlay');
    overlay.textContent = `YOU ${playerScore >= 5 ? 'WON' : 'LOST'}!`;
  }
});

const playAgain = () => {
  playerScore = 0;
  computerScore = 0;
  overlay.textContent = '';
  resultContainer.innerHTML = 'Choose an Option';
  overlay.classList.toggle('show-overlay');
  document.querySelector('#scores-player').textContent = playerScore;
  document.querySelector('#scores-computer').textContent = computerScore;
};
