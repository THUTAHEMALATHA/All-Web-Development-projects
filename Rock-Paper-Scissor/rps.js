let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScore();

function playGame(playerMove) {
  const computerGuess = pickComputerMove();
  let result = "";

  if (playerMove === "scissors") {
    if (computerGuess === "rock") result = "You lose";
    else if (computerGuess === "paper") result = "You win";
    else result = "Tie";
  } else if (playerMove === "paper") {
    if (computerGuess === "rock") result = "You win";
    else if (computerGuess === "scissors") result = "You lose";
    else result = "Tie";
  } else {
    if (computerGuess === "paper") result = "You lose";
    else if (computerGuess === "scissors") result = "You win";
    else result = "Tie";
  }

  if (result === "You win") score.wins++;
  else if (result === "You lose") score.losses++;
  else score.ties++;

  localStorage.setItem("score", JSON.stringify(score));

  const resultEl = document.querySelector(".js-result");
  resultEl.innerHTML = result;

  // remove old classes
  resultEl.classList.remove("win", "lose", "tie");

  if (result === "You win") resultEl.classList.add("win");
  else if (result === "You lose") resultEl.classList.add("lose");
  else resultEl.classList.add("tie");

  // moves display
  const movesEl = document.querySelector(".js-moves");
  movesEl.innerHTML = `
    You
    <img class="move-img animate" src="images/${playerMove}-emoji.png">
    <img class="move-img animate" src="images/${computerGuess}-emoji.png">
    Computer
  `;

  updateScore();
}

function updateScore() {
  document.querySelector(".js-score").innerHTML =
    `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}

function resetScore() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem("score");
  updateScore();
}

function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) return "rock";
  if (randomNumber < 2 / 3) return "paper";
  return "scissors";
}
