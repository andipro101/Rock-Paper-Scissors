
let choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    let ComputerHandSignalChoice =  Math.random() * 3;
    ComputerHandSignalChoice = Math.floor(ComputerHandSignalChoice);
    return choices[ComputerHandSignalChoice];
    
}

function getPlayerChoice() {
   let choice = prompt("Select Rock, Paper or Scissors: ");
   return choice.toLowerCase();

}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "scissors"){
            return "You Win! Rock beats Scissors";
        }
        else if (computerSelection == "paper"){
            return "You Lose! Paper beats Rock";
        }
        else if (computerSelection == "rock"){
            return "Draw! Both Players chose Rock";
        }         
    }
        
        
    else if (playerSelection == "paper") {
         if (computerSelection == "rock"){
            return "You Win! Paper beats Rock";
        }
        else if (computerSelection == "scissors"){
            return "You Lose! Scissors beats Paper";
        }
        else if (computerSelection == "paper"){
            return "Draw! Both Players chose Paper";
        }  
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper"){
            return "You Win! Scissors beats Paper";
        }
        else if (computerSelection == "rock"){
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection == "scissors"){
            return "Draw! Both Players chose Scissors";
        }     
    }
}


alert(playRound(playerSelection, computerSelection))