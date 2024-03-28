
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

let choice = ""

rockButton.addEventListener("click", () => {
    playGame("rock")

});
paperButton.addEventListener("click", () => {
    playGame("paper")
});
scissorsButton.addEventListener("click", () => {
    playGame("scissors")
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
            return "win";
        }
        else if (computerSelection == "paper"){
            alert ("You Lose! Paper beats Rock");
            return "lose";
        }
        else if (computerSelection == "rock"){
            alert ("Draw! Both Players chose Rock");
            return "draw";
        }         
    }
    else if (playerSelection == "paper") {
         if (computerSelection == "rock"){
            alert ("You Win! Paper beats Rock");
            return "win";
        }
        else if (computerSelection == "scissors"){
            alert ("You Lose! Scissors beats Paper");
            return "lose";
        }
        else if (computerSelection == "paper"){
            alert ("Draw! Both Players chose Paper");
            return "draw";
        }  
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper"){
            alert ("You Win! Scissors beats Paper");
            return "win";
        }
        else if (computerSelection == "rock"){
            alert ("You Lose! Rock beats Scissors");
            return "lose";
        }
        else if (computerSelection == "scissors"){
            alert ("Draw! Both Players chose Scissors");
            return "draw";
        }     
    }
}




function playGame(choice){
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;

    // for (let step = 0; step < 5; step++) {
    //     const playerSelection = choice;
    //     const computerSelection = getComputerChoice();
    //     const result = playRound(playerSelection, computerSelection);


    //     if (result == "win") {
    //         playerWins++;
    //     } else if (result == "lose") {
    //         computerWins++;
    //     } else if (result == "draw") {
    //         draws++;
    //   }
    // }

    const playerSelection = choice;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result == "win") {
        playerWins++;
    } else if (result == "lose") {
        computerWins++;
    } else if (result == "draw") {
        draws++;
    }


    if (playerWins > computerWins){
        alert("You Win!!! \n" + playerWins + ":Wins" + "/" + computerWins +":Loses" + "/" + draws + ":Draws");
    }
    else if (playerWins < computerWins){
        alert("You Lose!!! \n" + playerWins + ":Wins" + "/" + computerWins +":Loses" + "/" + draws + ":Draws");
    }
    else if (playerWins == computerWins){
        alert("Game is a Draw");
    }
}




