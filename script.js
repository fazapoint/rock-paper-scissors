function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playRound(playerSelection, computerSelection){
    // Logic to decide who's the winner
    if(playerSelection === computerSelection){
        return "It's a tie round!";
    }

    if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        return `You win, ${playerSelection} beats ${computerSelection}`;
    }else{
        return `You lost, ${computerSelection} beats ${playerSelection}`;
    }
}

function playGame(){
    const buttons = document.querySelectorAll('.btnChoice');
    let playerScore = 0;
    let computerScore = 0;

    buttons.forEach((button) => {
        button.addEventListener('click', function(){
            let playerSelection = button.value;
            let computerSelection = getComputerChoice();
            let roundResult = playRound(playerSelection, computerSelection);
            console.log('You chose ' + playerSelection);
            console.log('Computer chose ' + computerSelection);
            console.log(roundResult);
            if (roundResult.includes('You win')){
                playerScore++;
            } else if (roundResult.includes('You lost')){
                computerScore++;
            }
            console.log(`Player: ${playerScore} - computer: ${computerScore}`);
            console.log('--------------------------------------------')
        });
    });
}


playGame();


// function game(){
//     // each game is 5 rounds, so use function playRound function 5 times
//     let playerScore = 0;
//     let computerScore = 0;
//     for(let i=0; i < 5; i++){
//         // start the round
//         console.log(`Round ${i+1}`);
//         let playerSelection = getUserChoice();
//         let computerSelection = getComputerChoice();
//         let roundResult = playRound(playerSelection, computerSelection);
//         console.log(roundResult);
//         if(roundResult.includes('You win')){
//             playerScore++;
//         } else if(roundResult.includes('You lost')){
//             computerScore++;
//         }
//     }
//     let endGame;
//     if(playerScore > computerScore){
//         endGame = `Congrats, you win the game! the score is ${playerScore} (you) - ${computerScore} (computer)`;
//     }else if(playerScore < computerScore){
//         endGame = `Sorry, you lost the game! the score is ${playerScore} (you) - ${computerScore} (computer)`;
//     }else{
//         endGame = `It's a tie game! the score is ${playerScore} (you) - ${computerScore} (computer)`;
//     }
//     return endGame;
// }