
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");


let playerWins = 0;
let computerWins = 0;
let draws = 0;


rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});




function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let ComputerHandSignalChoice =  Math.random() * 3;
    ComputerHandSignalChoice = Math.floor(ComputerHandSignalChoice);
    return choices[ComputerHandSignalChoice];
    
}

function playRound(playerSelection, computerSelection) {
    
    
    if (playerSelection == "rock") {
        if (computerSelection == "scissors"){
            alert ("You Win! Rock beats Scissors");
            playerWins++;
        }
        else if (computerSelection == "paper"){
            alert ("You Lose! Paper beats Rock");
            computerWins++;
        }
        else if (computerSelection == "rock"){
            alert ("Draw! Both Players chose Rock");
            draws++;
        }         
    }
    else if (playerSelection == "paper") {
         if (computerSelection == "rock"){
            alert ("You Win! Paper beats Rock");
            playerWins++;
        }
        else if (computerSelection == "scissors"){
            alert ("You Lose! Scissors beats Paper");
            computerWins++;
        }
        else if (computerSelection == "paper"){
            alert ("Draw! Both Players chose Paper");
            draws++;
        }  
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper"){
            alert ("You Win! Scissors beats Paper");
            playerWins++;
        }
        else if (computerSelection == "rock"){
            alert ("You Lose! Rock beats Scissors");
            computerWins++;
        }
        else if (computerSelection == "scissors"){
            alert ("Draw! Both Players chose Scissors");
            draws++;
        }     
    }


    if (playerWins === 5 || computerWins === 5 || draws === 5){
        if (playerWins > computerWins){
            alert("You Win!!! \n" + playerWins + ":Wins" + "/" + computerWins +":Loses" + "/" + draws + ":Draws");
        }
        else if (playerWins < computerWins){
            alert("You Lose!!! \n" + playerWins + ":Wins" + "/" + computerWins +":Loses" + "/" + draws + ":Draws");
        }
        else if (playerWins == computerWins){
            alert("Game is a Draw");
        }
        playerWins = 0;
        computerWins = 0;
        draws = 0;
    }

}





