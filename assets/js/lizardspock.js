const winnerArray = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0],
  ];
  
  const choiceStrings = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  
  // Scores
  let currentStreakScore = 0;
  let highestStreakScore = 0;
  
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
      const randomNumber = Math.floor(Math.random() * 3);
      computerChoiceParagraph.innerText = `Computer chose: ${choiceStrings[randomNumber]}`;
      return randomNumber;
    }
  
    function userChoice(choice) {
      const userChoiceNumber = parseInt(choice);
      userChoiceParagraph.innerText = `You chose: ${choiceStrings[userChoiceNumber]}`;
      return userChoiceNumber;
    }
  
    function checkWin(player1, player2) {
      const outcome = winnerArray[player1][player2];
      let outcomeText;
  
      switch (outcome) {
        case 1:
          outcomeText = 'You won!';
  
          currentStreakScore++;
          localStorage.setItem('current-streak-score', currentStreakScore);
          currentStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentStreakScore}</strong><br>Current Streak`;
  
          if (currentStreakScore > highestStreakScore) {
            highestStreakScore = currentStreakScore;
            localStorage.setItem('highest-streak-score', highestStreakScore);
            highestStreakScoreParagraph.innerHTML = `<strong class="fontUp">${highestStreakScore}</strong><br>Highest Streak`;
          }
  
          break;
  
        case 0:
          outcomeText = 'You drew!';
          break;
  
        case -1:
          outcomeText = 'You lost!';
  
          currentStreakScore = 0;
          localStorage.setItem('current-streak-score', '0');
          currentStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentStreakScore}</strong><br>Current Streak`;
  
          break;
  
        default:
          break;
      }
  
      gameOutcomeParagraph.innerText = outcomeText;
    }
  
    function choiceButtonClickHandler() {
      const userPlay = userChoice(this.getAttribute('data-selection'));
      const computerPlay = computerChoice();
      checkWin(userPlay, computerPlay);
    }
  });
  
  
  
  