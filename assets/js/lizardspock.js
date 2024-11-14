const winnerArray = [
  [0, -1, 1, 1, -1],
  [1, 0, -1, -1, 1],
  [-1, 1, 0, 1, -1],
  [-1, 1, -1, 0, 1],
  [1, -1, 1, -1, 0],

];

const choiceStrings = ['rock', 'paper', 'scissor', 'lizard', 'spock'];

// Scores
let currentStreakScore = 0;
let highestStreakScore = 0;

function getOutcomeMessage(player, computer) {
  const outcomeMessages = [
    ["You drew!", "Paper covers Rock", "Rock crushes Scissors", "Rock crushes Lizard", "Spock vaporizes Rock"],
    ["Paper covers Rock", "You drew!", "Scissors cuts Paper", "Lizard eats Paper", "Paper disproves Spock"],
    ["Rock crushes Scissors", "Scissors cuts Paper", "You drew!", "Scissors decapitates Lizard", "Spock smashes Scissors"],
    ["Rock crushes Lizard", "Lizard eats Paper", "Scissors decapitates Lizard", "You drew!", "Lizard poisons Spock"],
    ["Spock vaporizes Rock", "Paper disproves Spock", "Spock smashes Scissors", "Lizard poisons Spock", "You drew!"]
  ];
  return outcomeMessages[player][computer];
}


document.addEventListener('DOMContentLoaded', function () {
      // Add choice handler function to Rock, Paper and Scissors buttons.
      const userSelectionButtonList = document.querySelectorAll('.user-selection');
      for (let userSelectionButton of userSelectionButtonList) {
        userSelectionButton.addEventListener('click', choiceButtonClickHandler);
      }

      // Find all the HTML elements we want to manipulate.
      const userChoiceParagraph = document.getElementById('user-choice');
      const computerChoiceParagraph = document.getElementById('computer-choice');
      const gameOutcomeParagraph = document.getElementById('game-outcome');
      const currentStreakScoreParagraph = document.getElementById(
        'current-streak-score'
      );
      const highestStreakScoreParagraph = document.getElementById(
        'highest-streak-score'
      );
      const computerCard = document.querySelector(".computer-card img");


      // Get current streak score from local storage.
      const currentStreakScoreLocal = localStorage.getItem('current-streak-score');
      if (currentStreakScoreLocal) {
        currentStreakScore = parseInt(currentStreakScoreLocal);
      }
      currentStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentStreakScore}</strong><br>Current Streak`;

      // Get highest streak score from local storage.
      const highestStreakScoreLocal = localStorage.getItem('highest-streak-score');
      if (highestStreakScoreLocal) {
        highestStreakScore = parseInt(highestStreakScoreLocal);
      }
      highestStreakScoreParagraph.innerHTML = `<strong class="fontUp">${highestStreakScore}</strong><br>Highest Streak`;

      function computerChoice() {
        const randomNumber = Math.floor(Math.random() * 5);
        computerChoiceParagraph.innerText = `Computer chose: ${choiceStrings[randomNumber]}`;
        computerChoiceParagraph.innerText = `Computer chose: ${choiceStrings[randomNumber]}`;
        computerCard.setAttribute('src', `assets/img/${choiceStrings[randomNumber]}.svg`)
        computerCard.setAttribute('alt', `${choiceStrings[randomNumber]}`)
        return randomNumber;
      }

      function userChoice(choice) {
        const userChoiceNumber = parseInt(choice);
        userChoiceParagraph.innerText = `You chose: ${choiceStrings[userChoiceNumber]}`;
        return userChoiceNumber;
      }

      function checkWin(player1, player2) {
        const outcome = winnerArray[player1][player2];
        let outcomeText = getOutcomeMessage(player1, player2);

        if (outcome === 1) {
          outcomeText = 'You won! ' + outcomeText;
          currentStreakScore++;
          localStorage.setItem('current-streak-score', currentStreakScore);
          currentStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentStreakScore}</strong><br>Current Streak`;

          if (currentStreakScore > highestStreakScore) {
            highestStreakScore = currentStreakScore;
            localStorage.setItem('highest-streak-score', highestStreakScore);
            highestStreakScoreParagraph.innerHTML = `<strong class="fontUp">${highestStreakScore}</strong><br>Highest Streak`;
          }

        } 
         else if (outcome === -1) {
          outcomeText = 'You lost. ' + outcomeText;
          currentStreakScore = 0;
          localStorage.setItem('current-streak-score', '0');
          currentStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentStreakScore}</strong><br>Current Streak`;
        }

        gameOutcomeParagraph.innerText = outcomeText;
  }
  function choiceButtonClickHandler() {
    const userPlay = userChoice(this.getAttribute('data-selection'));
    const computerPlay = computerChoice();
    checkWin(userPlay, computerPlay);
  }
});