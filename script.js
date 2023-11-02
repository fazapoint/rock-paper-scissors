let playerScore = 0;
let computerScore = 0;
const info = document.querySelector('#info');
const score = document.querySelector('#score');
const buttons = document.querySelectorAll('.btnChoice');
const btnPlay = document.querySelector('#btnPlay');

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playGame(playerSelection, computerSelection){
    // remove all child if parent info node still have child (reset every round)
    while (info.firstChild) {
        info.removeChild(info.firstChild);
    }

    while (score.firstChild) {
        score.removeChild(score.firstChild);
    }

    let roundResult = '';

    if(playerSelection === computerSelection){
        roundResult = "It's a tie round!";
    } else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        roundResult = `You win, ${playerSelection} beats ${computerSelection}`;
    }else{
        roundResult = `You lost, ${computerSelection} beats ${playerSelection}`;
    }

    // append information to the html
    const playerSelectionInfo = document.createElement('div') 
    playerSelectionInfo.textContent = 'You chose ' + playerSelection;
    info.appendChild(playerSelectionInfo);

    const computerSelectionInfo = document.createElement('div') 
    computerSelectionInfo.textContent = 'Computer chose ' + computerSelection;
    info.appendChild(computerSelectionInfo);

    const roundResultInfo = document.createElement('div') 
    roundResultInfo.textContent = roundResult;
    info.appendChild(roundResultInfo);

    if (roundResult.includes('You win')){
        playerScore++;
    } else if (roundResult.includes('You lost')){
        computerScore++;
    }

    // append score information to the html
    const currentScore = document.createElement('div');
    currentScore.textContent = `Player: ${playerScore} - computer: ${computerScore}`;
    score.appendChild(currentScore);
    
    // if player or computer reached 5 score logic
    let winner = ''
    if (playerScore >= 5){
        winner = 'Congrats! Player win the game!';
        buttons.forEach(button => {
            button.style.display = 'none';
            btnPlay.style.display = 'block';
        });
    }else if(computerScore >= 5){
        winner = 'Computer win the game!';
        playerScore = 0;
        computerScore = 0;
        buttons.forEach(button => {
            button.style.display = 'none';
            btnPlay.style.display = 'block';
        });
    }

    // append the winner information to the html
    const winnerInfo = document.createElement('div');
    winnerInfo.textContent = winner;
    info.appendChild(winnerInfo)

}

// make choice button hidden
buttons.forEach(button => {
    button.style.display = 'none';
});

// playGame() with argument input of button value
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playGame(button.value, getComputerChoice())
    });
});

// When play button clicked (button appear first time or when winner already decided)
btnPlay.addEventListener('click', function(){
    btnPlay.style.display = 'none';
    buttons.forEach(button => {
        button.style.display = 'block';
    });
    playerScore = 0;
    computerScore = 0;

    // remove previous info from the game before
    while (info.firstChild) {
        info.removeChild(info.firstChild);
    }

    while (score.firstChild) {
        score.removeChild(score.firstChild);
    }
})