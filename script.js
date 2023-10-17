// create function that randomly return rock, paper or scissors called getComputerChoice
function getComputerChoice (){
    console.log('i am getcomputerchoice');
    choice = a;
    return choice;
}

// create function that plays a single round of the game. The function should take two parameters,
// -playerSelection and computerSelection, make playerSelection case-insensitive (rock, ROCK, RocK)
function playRound(playerSelection, computerSelection){
    roundResult = "You Lose! Paper beats Rock"
    return roundResult;
}

function game(){
    // each game is 5 rounds, so use function playRound function 5 times 
    return '5 rounds each game'
}

//use prompt() to get input from user
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))

