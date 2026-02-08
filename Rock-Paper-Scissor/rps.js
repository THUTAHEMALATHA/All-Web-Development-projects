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
    if (computerGuess === "rock") {
      result = "You lose";
    } else if (computerGuess === "paper") {
      result = "You win";
    } else if (computerGuess === "scissors") {
      result = "Tie";
    }
  } else if (playerMove === "paper") {
    if (computerGuess === "rock") {
      result = "You win";
    } else if (computerGuess === "paper") {
      result = "Tie";
    } else if (computerGuess === "scissors") {
      result = "You lose";
    }
  } else if (playerMove === "rock") {
    if (computerGuess === "rock") {
      result = "Tie";
    } else if (computerGuess === "paper") {
      result = "You lose";
    } else if (computerGuess === "scissors") {
      result = "You win";
    }
  }

  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-moves"
  ).innerHTML = ` You <img class="move-img" src="images/${playerMove}-emoji.png" alt="" />
      <img class="move-img" src="images/${computerGuess}-emoji.png" alt="" /> computer`;
  updateScore();
}

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerGuess = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerGuess = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerGuess = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerGuess = "scissors";
  }

  return computerGuess;
}