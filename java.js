

 let cScore = 0;
 let pScore = 0; 


 function numGen() {
    num = Math.ceil(Math.random()*3);
    return num;
}

const btn = document.querySelector('.rock');
btn.addEventListener('click', playRound);  // THESE TWO LINES WORK WITH ONE BUTTON

// const buttons = document.querySelectorAll('button');

// buttons.forEach(btn => btn.addEventListener('click', playRound, { 
    // capture: false,  //reverse bubbling if true
    // once: true   //only allows one click listener
//   }));

// btn.forEach(btn => btn.addEventListener ('click', playRound));  


function playRound() {

    // let result = 'default';

    let playerSelection = btn.textContent;  //THIS WORKS WITH THE TWO LINES OF CODE AT 12 and 13

    let computerPlay = numGen();
    if (computerPlay === 1) {
            computerSelection = 'ROCK'
        } else if (computerPlay === 2) {
            computerSelection = 'PAPER'
        } else {
            computerSelection = 'SCISSORS'
        }

    if  ((playerSelection === 'ROCK' && computerSelection === 'ROCK') ||
        (playerSelection === 'PAPER' && computerSelection === 'PAPER') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS')) {
    result = 'Its a Draw';
    }   
    else if ((playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
            (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
            (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')) {
    result = 'You Loose!';
    ++cScore;
    }   
    else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
    result = 'You Win!';
    ++pScore;
    }
    else {
    result = 'invalid entry';
    }
    console.log(result);
    console.log(`Computer: ${cScore} , Player:  ${pScore}`);
}

// function game() {
//      for (let i = 0; i < 5; i++) {
//        playRound();
//      } 
// }

// game();
