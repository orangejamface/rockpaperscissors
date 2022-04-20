

 let cScore = 0;
 let pScore = 0; 


 function numGen() {
    num = Math.ceil(Math.random()*3);
    return num;
}

const score = document.querySelector('.score');
const end = document.querySelector('.end');
const lastPlay = document.querySelector('.lastPlay');


const choice = document.querySelectorAll('#selection');
choice.forEach(btn => btn.addEventListener('click', playRound)); //trigger the playRound function for any button in my html

const gameBtns = document.querySelector('.gameButtons'); //div containing the three play option buttons
const newGame = document.querySelector('.newGame'); //play again? button

function resetButton() {
    if (pScore === 5 || cScore === 5 ) {
        cScore = 0;
        pScore = 0;
        gameBtns.style.cssText = 'display: none;'
        newGame.style.cssText = 'display: flex;'
    }  //function to remove play buttons and display reset button
};

newGame.addEventListener('click', resetGame);

function resetGame() {
    newGame.style.cssText = 'display: none;';
    gameBtns.style.cssText = 'display: flex;';
    score.textContent = `Computer: ${cScore}
    Player:  ${pScore}`;
    end.textContent = '';
    lastPlay.textContent = '';
}

function playRound() {
    let playerSelection = this.textContent; // sets player selection to whichever button is clicked
    console.log(playerSelection);

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
    score.textContent = `Computer: ${cScore}
    Player:  ${pScore}`;
    lastPlay.textContent = `You played ${playerSelection},
    Your Opponent played ${computerSelection}`; 

    
    if (cScore === 5){
        console.log('GAME OVER MAN')
        end.textContent = 'GAME OVER MAN'
        resetButton();
    }

    if (pScore === 5 ) {
        console.log('YOU HAVE DEFEATED ME.....WWAAAAAAAaaaaaaa')
        end.textContent = 'YOU HAVE DEFEATED ME'
        resetButton();
    }

}


// function game() {
//      for (let i = 0; i < 5; i++) {
//        playRound();
//      } 
// }

// game();
