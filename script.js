
function getComputerChoice() {
    let ret = Math.floor(Math.random() * 3) + 1;
    
    if (ret===1) {
    
        return "ROCK";
    } 
    else if (ret===2) {
    
        return "PAPER"
    }
    
    return "SCISSORS"
}

function makeCheckChoice() {
    let uncheckedChoice;
    let choice = false;

    while (!choice) {
        uncheckedChoice = prompt("Choose your warrior: \n");
        if (typeof(uncheckedChoice) != "string") {
            console.log("Incorrect entry1, please enter again\n");
            continue;
        }
        let upperChoice = uncheckedChoice.toUpperCase();
        console.log(upperChoice);
        if (upperChoice !== "ROCK" && upperChoice !== "PAPER" && upperChoice !== "SCISSORS" ) {
            console.log("Incorrect entry, please enter again\n")
            continue;
        }
    
        choice = true;
    }

    return uncheckedChoice;

}

let compChoice = getComputerChoice();
let playerChoice = makeCheckChoice().toUpperCase();

console.log(playerChoice, compChoice);