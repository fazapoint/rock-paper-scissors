// create function that randomly return rock, paper or scissors called getComputerChoice
function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"];
    let choice = Math.floor(Math.random() * choices.length)
    return choices[choice];
}

function getUserChoice(){
    // validate input playerSelection, if input wrong then re-prompt, use prompt() to get input from user
    let choice = prompt("Pick rock paper scissor").toLowerCase();
    while(choice !== "rock" && choice !== "paper" && choice !== "scissor"){
        choice = prompt("Invalid choice, please pick rock paper or scissor").toLowerCase();
    }
    return choice;
}

// create function that plays a single round of the game. The function should take two parameters,
// -playerSelection and computerSelection, make playerSelection case-insensitive (rock, ROCK, RocK)
function playRound(playerSelection, computerSelection){
    // Logic to decide who's the winner
    if(playerSelection === computerSelection){
        return "It's a tie round!";
    }

    if(
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
    ){
        return `You win, ${playerSelection} beats ${computerSelection}`;
    }else{
        return `You lost, ${computerSelection} beats ${playerSelection}`;
    }
}

function game(){
    // each game is 5 rounds, so use function playRound function 5 times
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i < 5; i++){
        // start the round
        console.log(`Round ${i+1}`);
        let playerSelection = getUserChoice();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if(roundResult.includes('You win')){
            playerScore++;
        } else if(roundResult.includes('You lost')){
            computerScore++;
        }
    }
    let endGame;
    if(playerScore > computerScore){
        endGame = `Congrats, you win the game! the score is ${playerScore} (you) - ${computerScore} (computer)`;
    }else if(playerScore < computerScore){
        endGame = `Sorry, you lost the game! the score is ${playerScore} (you) - ${computerScore} (computer)`;
    }else{
        endGame = `It's a tie game! the score is ${playerScore} (you) - ${computerScore} (computer)`;
    }
    return endGame;
}

console.log(game())