
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let ComputerHandSignalChoice =  Math.random() * 3;
    ComputerHandSignalChoice = Math.floor(ComputerHandSignalChoice);
    return choices[ComputerHandSignalChoice];
    
}

function getPlayerChoice() {
   let choice = prompt("Select Rock, Paper or Scissors: ");
   return choice.toLowerCase();

}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == "rock") {
        if (computerSelection == "scissors"){
            console.log ("You Win! Rock beats Scissors");
            return "win";
        }
        else if (computerSelection == "paper"){
            console.log ("You Lose! Paper beats Rock");
            return "lose";
        }
        else if (computerSelection == "rock"){
            console.log ("Draw! Both Players chose Rock");
            return "draw";
        }         
    }
    else if (playerSelection == "paper") {
         if (computerSelection == "rock"){
            console.log ("You Win! Paper beats Rock");
            return "win";
        }
        else if (computerSelection == "scissors"){
            console.log ("You Lose! Scissors beats Paper");
            return "lose";
        }
        else if (computerSelection == "paper"){
            console.log ("Draw! Both Players chose Paper");
            return "draw";
        }  
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper"){
            console.log ("You Win! Scissors beats Paper");
            return "win";
        }
        else if (computerSelection == "rock"){
            console.log ("You Lose! Rock beats Scissors");
            return "lose";
        }
        else if (computerSelection == "scissors"){
            console.log ("Draw! Both Players chose Scissors");
            return "draw";
        }     
    }
}




function playGame(){
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;

    for (let step = 0; step < 5; step++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);


        if (result == "win") {
            playerWins++;
        } else if (result == "lose") {
            computerWins++;
        } else if (result == "draw") {
            draws++;
      }
    }

    if (playerWins > computerWins){
        alert("You Win \n" + playerWins + ":Wins" + "/" + computerWins +":Loses" + "/" + draws + ":Draws");
    }
    else if (playerWins < computerWins){
        alert("You Lose \n" + playerWins + ":Wins" + "/" + computerWins +":Loses" + "/" + draws + ":Draws");
    }
    else if (playerWins == computerWins){
        alert("Game is a Draw");
    }
}

playGame()