

 let cScore = 0;
 let pScore = 0; 


 function numGen() {
    num = Math.ceil(Math.random()*3);
    return num;
}

const choice = document.querySelectorAll('button');
choice.forEach(btn => btn.addEventListener('click', playRound)); //trigger the playRuond functino for any button in my html

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
    
    if (cScore === 5){
        console.log('GAME OVER MAN')
        cScore = 0;
        pScore = 0;
    }
    if (pScore === 5 ) {
        console.log('YOU HAVE DEFEATED ME.....WWAAAAAAAaaaaaaa')
        cScore = 0;
        pScore = 0;
    }

    

}

// function game() {
//      for (let i = 0; i < 5; i++) {
//        playRound();
//      } 
// }

// game();
