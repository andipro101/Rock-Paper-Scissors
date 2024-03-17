function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    let ComputerHandSignalChoice =  Math.random() * 3;
    ComputerHandSignalChoice = Math.floor(ComputerHandSignalChoice)
    ComputerHandSignalChoice = choices[ComputerHandSignalChoice]
    return ComputerHandSignalChoice
}


console.log(getComputerChoice());