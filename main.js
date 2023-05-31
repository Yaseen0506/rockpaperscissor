let playerScore = 0;
let computerScore = 0;
let userMove = "";
let buttons = document.querySelectorAll(".btn");
let resultElement = document.querySelector("#result-area");
const playerDisplay = document.querySelector("#p-score");
const computerDisplay = document.querySelector("#c-score");
let turnsPlayed = 0;

function getComputerChoice() {
  const stonePaperScissor = ["rock", "paper", "scissor"];
  let randomNumber = Math.floor(Math.random() * 3);
  let computerMove = stonePaperScissor[randomNumber];
  return computerMove;
}

function playGame(e) {
  if (turnsPlayed >= 5) {
    return; 
  }

  const playerMove = e.target.id;
  const computerMove = getComputerChoice();

  if (playerMove === computerMove) {
    resultElement.innerText = "The game is a tie";
  } else if (
    (playerMove === "rock" && computerMove === "paper") ||
    (playerMove === "paper" && computerMove === "scissor") ||
    (playerMove === "scissor" && computerMove === "rock")
  ) {
    computerScore++;
    resultElement.innerText = `${computerMove} beats ${playerMove}`;
  } else {
    playerScore++;
    resultElement.innerText = `${playerMove} beats ${computerMove}`;
  }

  playerDisplay.textContent = playerScore;
  computerDisplay.textContent = computerScore;

  turnsPlayed++;
  if (turnsPlayed === 5) {
    displayResult()
  }
}

function displayResult() {
  if (playerScore > computerScore) {
    resultElement.innerText = `Player Score: ${playerScore} || Computer Score: ${computerScore} - Player Wins`;
  } else if (playerScore < computerScore) {
    resultElement.innerText = `Player Score: ${playerScore} || Computer Score: ${computerScore} - Computer Wins`;
  } else {
    resultElement.innerText = `Player Score: ${playerScore} || Computer Score: ${computerScore} - Match Tied`;
  }

  document.querySelector("#end-message").textContent = "Please refresh to start again"
}

function gamePlay() {
  buttons.forEach((button) => {
    button.addEventListener("click", playGame);
  });
}

gamePlay();
