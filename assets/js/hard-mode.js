


const winnerArray = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0],
  ];
  
  const choiceStrings = ['rock', 'paper', 'scissors'];
  let userChoiceMemory = []
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
  
  
    function userChoice(choice) {
      const userChoiceNumber = parseInt(choice);
      userChoiceParagraph.innerText = `You chose: ${choiceStrings[userChoiceNumber]}`;
      userChoiceMemory.push(userChoiceNumber)
      return userChoiceNumber;
    }
  
    function checkWin(player1, player2) {
      const outcome = winnerArray[player1][player2];
      let outcomeText;
  
      switch (outcome) {
        case 1:
          outcomeText = 'You won!';
          sessionStorage.setItem('lastOutcome', outcomeText);
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
          sessionStorage.getItem('lastOutcome', outcomeText);
          break;
  
        case -1:
          outcomeText = 'You lost!';
          sessionStorage.setItem('lastOutcome', outcomeText);

          currentStreakScore = 0;
          localStorage.setItem('current-streak-score', '0');
          currentStreakScoreParagraph.innerText = `Current Streak: ${currentStreakScore}`;
          
          break;
  
        default:
          break;
      }
  
      gameOutcomeParagraph.innerText = outcomeText;
    }
  
   function choiceButtonClickHandler() {
    const userPlay = userChoice(this.getAttribute('data-selection'));
    const computerPlay = computerHardChoice();
    checkWin(userPlay, computerPlay);
    console.log("click acknowledged")
  }



  });
  


/** Computer choice for hard mode */
const gameOutcomeParagraph = document.getElementById('game-outcome');
let roundsPlayed = 0

let outcomeText = gameOutcomeParagraph.innerText
/** Function to discover last outcome from html */
let lastOutcometext = localStorage.getItem('lastOutcome');
let lastOutcome = findLastOutcome(lastOutcometext)

function findLastOutcome(outcomeText) {
    if(outcomeText === 'You won!'){
        return 1
    }
    if(outcomeText === 'You drew!'){
        return 0
    }
    if(outcomeText === 'You lost!'){
        return -1
    }
}




  function computerHardChoice() {
    /**
      First round is random as before  */
      const computerChoiceParagraph = document.getElementById('computer-choice');

      console.log("running hardmodecpu choice")

    if (roundsPlayed === 0){
    const randomNumber = Math.floor(Math.random() * 3);
    computerChoiceParagraph.innerText = `Computer chose: ${choiceStrings[randomNumber]}`;
    ++roundsPlayed
    console.log("no previous rounds, returning random choice")
    console.log("cpu choice:", randomNumber )
    console.log("rounds played:", roundsPlayed)
    return randomNumber;
    }
    /** Computer chooses according to last outcome and last user choice */
     else{
      let lastUserPlay = userChoiceMemory[(roundsPlayed - 1)]
      console.log("lastUserPlay: mem", userChoiceMemory[(roundsPlayed - 1)])
     console.log("lastUserPlay:", lastUserPlay)
     console.log("lastoutcome:", lastOutcome)
         if (lastOutcome === 1 ){
            

            computerChoiceParagraph.innerText = `Computer chose: ${choiceStrings[parseInt(lastUserPlay)]}`;
           
            ++roundsPlayed;
            console.log("last outcome=win. Returning last user play", lastUserPlay)
            return lastUserPlay

        }
        else while (lastOutcome === -1 || lastOutcome === 0){
            if (lastUserPlay === 2) {
                computerChoiceParagraph.innerText = `Computer chose: ${choiceStrings[0]}`;
                ++roundsPlayed; 
                console.log("last outcome=lose/draw. last player choice: scissors. returning: 0 (rock)" )
                return 0
                }
            if (lastUserPlay === 1) {
                computerChoiceParagraph.innerText = `Computer chose: ${choiceStrings[2]}`;
                ++roundsPlayed; 
                console.log("last outcome=lose/draw. last player choice: paper. returning: 2 (scissors)" )
                return 2
                }
            else {
                computerChoiceParagraph.innerText = `Computer chose: ${choiceStrings[1]}`;
                ++roundsPlayed;
                console.log("last outcome=lose/draw. last player choice: rock. returning: 1 (paper)" )
                return 1
                }

        }  }




    }
     
