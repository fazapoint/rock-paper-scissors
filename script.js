// create function that randomly return rock, paper or scissors called getComputerChoice
function getComputerChoice (){
    let choices = ["rock", "paper", "scissor"];
    let choice = Math.floor(Math.random() * choices.length)
    return choices[choice];
}

// create function that plays a single round of the game. The function should take two parameters,
// -playerSelection and computerSelection, make playerSelection case-insensitive (rock, ROCK, RocK)
function playRound(playerSelection, computerSelection){
    // Logic to decide who's the winner
    if(playerSelection === computerSelection){
        return "It's a tie round!"
    } else if(playerSelection === "rock"){
        //computer = paper, scissor
        if(computerSelection === "paper"){
            return "You lost, paper beats rock!";
        } else{
            return "You win, rock beats scissor!";
        }
    } else if(playerSelection === "paper"){
        //computer = rock, scissor
        if(computerSelection === "rock"){
            return "You win, paper beats rock";
        } else{
            return "You lost, scissor beats paper";
        }
    } else if(playerSelection === "scissor"){
        //computer = rock, paper
        if(computerSelection ==="rock"){
            return "You lost, rock beats scissor";
        } else{
            return "You win, scissor beats paper";
        }
    } else {
        return "Game logic wrong";
    }
  
    
}

function game(){
    // each game is 5 rounds, so use function playRound function 5 times
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i < 5; i++){
        // use prompt() to get input from user
        let playerSelection = prompt("Pick rock paper scissor").toLowerCase();
        // validate input playerSelection, if input wrong then re-prompt, else keep running the game
        if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissor"){
            playerSelection = prompt("Wrong choice (you need to pick rock, paper or scissor), Pick rock paper scissor").toLowerCase();
        } else{
            playRound(playerSelection, computerSelection)
        }
    }
    return '5 rounds each game';
}


let computerSelection = getComputerChoice();
const result = playRound(playerSelection, getComputerChoice())
console.log(result)


