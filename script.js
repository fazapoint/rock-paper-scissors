// create function that randomly return rock, paper or scissors called getComputerChoice
function getComputerChoice (){
    let choices = ["Rock", "Paper", "Scissor"];
    let choice = Math.floor(Math.random() * choices.length)
    console.log(choices[choice])
    return choices[choice];
}

// create function that plays a single round of the game. The function should take two parameters,
// -playerSelection and computerSelection, make playerSelection case-insensitive (rock, ROCK, RocK)
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    return playerSelection;
}

function game(){
    // each game is 5 rounds, so use function playRound function 5 times 
    return '5 rounds each game'
}

//use prompt() to get input from user
const playerSelection = "rOcK";
const computerSelection = getComputerChoice();
const modifiedPlayerSelection = playRound(playerSelection, computerSelection);
console.log(modifiedPlayerSelection)

