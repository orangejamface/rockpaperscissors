

 let cScore = 0;
 let pScore = 0; 


 function numGen() {
    num = Math.ceil(Math.random()*3);
    return num;
}

const playScore = document.querySelector('.playScore');
const comScore = document.querySelector('.comScore');
const end = document.querySelector('.end');
const lastPlay = document.querySelector('.lastPlay');
const message = document.querySelector('.message');


const choice = document.querySelectorAll('#selection');
choice.forEach(btn => btn.addEventListener('click', playRound)); //trigger the playRound function for any button in my html

const gameBtns = document.querySelector('.gameButtons'); //div containing the three play option buttons
const newGame = document.querySelector('.newGame'); //play again? button

function resetButton() {
    if (pScore === 5)   {
        end.textContent = 'Ok....how about another round?'
    }
    else {
        end.textContent = 'HA, I told you!! try again if you dare'
    }
    if (pScore === 5 || cScore === 5 ) {
        cScore = 0;
        pScore = 0;
        gameBtns.style.cssText = 'display: none;'
        newGame.style.cssText = 'display: flex;'
    }  //function to remove play buttons and display reset button once game is over
};

newGame.addEventListener('click', resetGame);


function resetGame() {
    newGame.style.cssText = 'display: none;';
    gameBtns.style.cssText = 'display: flex;';
    playScore.textContent = `Player:  ${pScore}`;
    comScore.textContent = `Computer:  ${pScore}`;
    end.textContent = 'here weeeee go!';
    lastPlay.textContent = '';
    message.textContent = '';
}

function playRound() {
    let playerSelection = this.textContent; // sets playerSelection to text of whichever button is clicked
    // console.log(playerSelection);

    let computerPlay = numGen();
    if (computerPlay === 1) {
            computerSelection = 'ROCK'
        } else if (computerPlay === 2) {
            computerSelection = 'PAPER'
        } else {
            computerSelection = 'SCISSORS'
        }

    // result.style.cssText = 'background-color: red;'
    if  ((playerSelection === 'ROCK' && computerSelection === 'ROCK') ||
        (playerSelection === 'PAPER' && computerSelection === 'PAPER') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS')) {
    result = 'Its a Draw!';
    }   
    else if ((playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
            (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
            (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')) {
    result = 'Ha! I got you fool!';
    ++cScore;
    }   
    else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
    result = 'You got me there...';
    ++pScore;
    }
    else {
    result = 'invalid entry';
    }
    // console.log(result);
    // console.log(`Player:  ${pScore}`);

    playScore.textContent = `Player:  ${pScore}`;
    comScore.textContent = `Computer: ${cScore}`;
    lastPlay.textContent = `You played ${playerSelection},
    Computer played ${computerSelection}`;
    message.textContent = result;

    
    if (cScore === 5){
        console.log('GAME OVER')
        end.textContent = 'GAME OVER!  Better luck next time'
        resetButton();
    }

    if (pScore === 5 ) {
        console.log('YOU HAVE DEFEATED ME.....WWAAAAAAAaaaaaaa')
        end.textContent = 'YOU HAVE DEFEATED ME!'
        resetButton();
    }

}
