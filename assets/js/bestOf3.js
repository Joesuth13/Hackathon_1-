const winnerArray = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0],
  ];
  
  const choiceStrings = ['rock', 'paper', 'scissors'];
  
  // Scores
  let currentStreakScore = 0;
  let highestStreakScore = 0;
  let userScore = 0;
  let cpuScore = 0;
  let currentWins = 0;
  let currentLosses = 0;
  let gameNumber = 1;
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
  
    /** Re-use current score streak and high score streak containers to house new "user score" and "cpu Score" counters */
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
      
      let outcomeText = `Game ${gameNumber}/3`;
        
      switch (outcome) {
        case 1:
            gameNumber++;
            ++currentWins;
            console.log(currentWins);
            currentStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentWins}</strong><br>Your score`;
            if (currentWins >= 2){
            
            outcomeText = 'You won!';
            currentWins = 0;
            currentLosses = 0;
            currentStreakScore++;
            gameNumber = 0;
            currentStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentWins}</strong><br>Your score`;
            highestStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentLosses}</strong><br>CPU Score`;
             }
          
            
            
          
  
          break;
  
        case 0:
        //   outcomeText = 'You drew!';
          break;
  
        case -1:
            gameNumber++;
          ++currentLosses;
          highestStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentLosses}</strong><br>CPU Score`;
          if(currentLosses >=2){
            outcomeText = 'You lost!';
            currentStreakScore = 0;
            currentWins = 0;
            currentLosses = 0;
            gameNumber = 0;
            currentStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentWins}</strong><br>Your score`;
            highestStreakScoreParagraph.innerHTML = `<strong class="fontUp">${currentLosses}</strong><br>CPU Score`;
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
  });