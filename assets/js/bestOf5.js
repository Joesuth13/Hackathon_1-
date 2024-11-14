const winnerArray = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0],
  ];
  
  const choiceStrings = ['rock', 'paper', 'scissors'];
  
  // Scores
  let currentStreakScore = 0;
  let highestStreakScore = 0;
  let userScore = 0
  let cpuScore = 0
  let currentWins = 0 // Player's win count
  let currentLosses = 0 // CPU's win count
  let gameNumber = 1 // Tracks the round number (1-5)
  
  document.addEventListener('DOMContentLoaded', function () {
    // Add choice handler function to Rock, Paper, and Scissors buttons
    const userSelectionButtonList = document.querySelectorAll('.user-selection');
    for (let userSelectionButton of userSelectionButtonList) {
      userSelectionButton.addEventListener('click', choiceButtonClickHandler);
    }
  
    // Find all the HTML elements we want to manipulate
    const userChoiceParagraph = document.getElementById('user-choice');
    const computerChoiceParagraph = document.getElementById('computer-choice');
    const gameOutcomeParagraph = document.getElementById('game-outcome');
    const currentStreakScoreParagraph = document.getElementById('current-streak-score');
    const highestStreakScoreParagraph = document.getElementById('highest-streak-score');
  
    // Initialize score display
    currentStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentWins}</strong><br>Your score`;
    highestStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentLosses}</strong><br>CPU Score`;
  
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
      let outcomeText = `Game ${gameNumber}/5`; // Update the round number (Best of 5)
  
      switch (outcome) {
        case 1:
          // Player wins the round
          currentWins++;
          currentStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentWins}</strong><br>Your score`;
  
          if (currentWins >= 3) { // Player wins Best of 5
            outcomeText = 'You won the Best of 5!';
            resetGame(); // Reset game if player wins 3 rounds
          }
          break;
  
        case 0:
          // It's a draw (no score change)
          break;
  
        case -1:
          // CPU wins the round
          currentLosses++;
          highestStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentLosses}</strong><br>CPU Score`;
  
          if (currentLosses >= 3) { // CPU wins Best of 5
            outcomeText = 'Computer won the Best of 5!';
            resetGame(); // Reset game if CPU wins 3 rounds
          }
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
  
//     function resetGame() {
//       // Reset the win counters and game number for a new Best of 5 game
//       currentWins = 0;
//       currentLosses = 0;
//       gameNumber = 1;
  
//       // Update the display to show reset scores
//       currentStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentWins}</strong><br>Your score`;
//       highestStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentLosses}</strong><br>CPU Score`;
//       gameOutcomeParagraph.innerText = 'Rock, Paper, Scissors'; // Reset outcome message
//     }
//   });
  