
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

        if (upperChoice !== "ROCK" && upperChoice !== "PAPER" && upperChoice !== "SCISSORS" ) {
            console.log("Incorrect entry, please enter again\n")
            continue;
        }
        choice = true;
    }

    return uncheckedChoice;
}

function playRound(user, comp) {
    let tie=true;
    while(tie==true) {
        // Ties
        if (user==="ROCK" && comp==="ROCK") {
            alert("TIE!")
            return "TIE";
        }
        else if (user==="PAPER" && comp==="PAPER") {
            alert("TIE!")
            return "TIE";
        }
        else if (user==="SCISSORS" && comp==="SCISSORS") {
            alert("TIE!")
            return "TIE";
        }
        // Comp wins
        else if (user==="ROCK" && comp==="PAPER") {
            tie=false;
            alert("COMPUTER WINS THIS ROUND!")
            return false;
        }
        else if (user==="PAPER" && comp==="SCISSORS") {
            tie=false;
            alert("COMPUTER WINS THIS ROUND!")
            return false;
        }
        else if (user==="SCISSORS" && comp==="ROCK") {
            tie=false;
            alert("COMPUTER WINS THIS ROUND!")
            return false;        
        }
        tie=false;
        alert("USER WINS THIS ROUND!")
        return true;
    }
}

function victory(winner, winnerCount, loserCount) {
    console.log(winner + " WINS!!!\n\nTHE SCORE WAS: \n" + winnerCount + " FOR THE WINNER, AND\n" + loserCount + " FOR THE LOSER");

    return;
}

let compCount=0;
let userCount=0;

while(compCount != 5 && userCount != 5) {

    let compChoice = getComputerChoice();
    let playerChoice = makeCheckChoice().toUpperCase();
    let result = playRound(playerChoice, compChoice)
    
    if (result == "TIE") {
        continue;
    }
    else if (result) {
        userCount++;
    }
    else if (!result) {
        compCount++;
    }
    
    if (userCount === 5) {
        victory("USER", userCount, compCount);
        break;
    }
    else if (compCount === 5) {
        victory("COMPUTER", compCount, userCount);
        break;
    }

}