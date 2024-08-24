function generateComputerChoice() {
  let randomNum = 3 * Math.random();
  if (randomNum > 0 && randomNum < 1) return `Stone`;
  else if (randomNum >= 1 && randomNum < 2) return `Paper`;
  else return `Scissor`;
}

function whoIsWinner(userChoice, computerChoice) {
  if (userChoice === `Stone`) {
    if (computerChoice === `Stone`) {
      score.tie++;
      return `It's a tie`;
    } else if (computerChoice === `Paper`) {
      score.lost++;
      return ` You lost`;
    } else {
      score.win++;
      return `You have Won`;
    }
  } else if (userChoice === `Paper`) {
    if (computerChoice === `Stone`) {
      score.win++;
      return `You have Won`;
    } else if (computerChoice === `Paper`) {
      score.tie++;
      return `It's a tie`;
    } else {
      score.lost++;
      return ` You lost`;
    }
  } else {
    if (computerChoice === `Stone`) {
      score.lost++;
      return `You lost`;
    } else if (computerChoice === `Paper`) {
      score.win++;
      return `You have Won`;
    } else {
      score.tie++;
      return `It's a tie`;
    }
  }
}

let scoreStr = localStorage.getItem("score");
let score;

updateScore(scoreStr);

function updateScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lost: 0,
        tie: 0,
      };

  score.displayResult = function () {
    return `Score: Win:${this.win} Lost:${this.lost} Tie:${this.tie}`;
  };

  document.querySelector(".score").innerText = score.displayResult();
}

function showResult(userChoice, computerChoice, winner) {
  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".result").innerText = `
  You have chosen: ${userChoice}\n
  Computer has chosen: ${computerChoice}\n
  ${winner}
`;


  document.querySelector(".score").innerText = score.displayResult();
}
