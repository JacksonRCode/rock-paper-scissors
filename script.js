
function getComputerChoice() {
    let ret = Math.floor(Math.random() * 3) + 1;
    
    if (ret===1) {
    
        return "rock";
    } 
    else if (ret===2) {
    
        return "paper"
    }
    
    return "scissors"
}

function playRound(user, comp) {
    let tie=true;
    while(tie==true) {
        // ties
        if (user==="rock" && comp==="rock") {
            alert("tie!")
            return "tie";
        }
        else if (user==="paper" && comp==="paper") {
            alert("tie!")
            return "tie";
        }
        else if (user==="scissors" && comp==="scissors") {
            alert("tie!")
            return "tie";
        }
        // Comp wins
        else if (user==="rock" && comp==="paper") {
            tie=false;
            alert("COMPUTER WINS THIS ROUND!")
            return false;
        }
        else if (user==="paper" && comp==="scissors") {
            tie=false;
            alert("COMPUTER WINS THIS ROUND!")
            return false;
        }
        else if (user==="scissors" && comp==="rock") {
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

let items = document.querySelectorAll('.option');
items.forEach((item) => {
    item.addEventListener('click', () => {
        console.log(item.classList[0]);
        console.log(getComputerChoice());
    })
})



// let result = playRound(playerChoice, compChoice)

// if (result == "tie") {
// }
// else if (result) {
//     userCount++;
// }
// else if (!result) {
//     compCount++;
// }

// if (userCount === 5) {
//     victory("USER", userCount, compCount);
// }
// else if (compCount === 5) {
//     victory("COMPUTER", compCount, userCount);
// }

