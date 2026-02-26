function computerChoice () {
    let availableGuesses =  3;
    let choice = Math.floor(Math.random() * availableGuesses);
    
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function checkWin () {
    userChoice = prompt("Enter your choice (Rock, paper, scissors)\nSingle click any element to continue and double click any element cancel the game").toLocaleLowerCase();
    let choiceOfComputer = computerChoice();
    if (choiceOfComputer === userChoice) {
        console.log("It is a draw");
    }
    else if (choiceOfComputer === "rock" && userChoice === "paper") {
        userScore += 1;
        console.log(`Player won: Paper beats rock \nPlayer: ${userScore}\nComputer: ${computerScore}`)
    }
    else if (choiceOfComputer === "paper" && userChoice === "scissors") {
        userScore += 1;
        console.log(`Player won: Scisors beats paper\nPlayer: ${userScore}\nComputer: ${computerScore}`)
    }
    else if (choiceOfComputer === "paper" && userChoice === "rock") {
        computerScore += 1;
        console.log(`Computer won Paper beats rock\nPlayer: ${userScore}\nComputer: ${computerScore}`)
    }
    else if (choiceOfComputer === "scissors" && userChoice === "paper") {
        computerScore += 1;
        console.log(`Computer won Scissors beat Paper\nPlayer: ${userScore}\nComputer: ${computerScore}`)
    }
    else if (choiceOfComputer === "rock" && userChoice === "scissors") {
        computerScore += 1;
        console.log(`Computer won Rock beats scissors\nPlayer: ${userScore}\nComputer: ${computerScore}`)
    }
    else if (choiceOfComputer === "scissors" && userChoice === "rock") {
        userScore += 1;
        console.log(`Player won Rock beats scissors\nPlayer: ${userScore}\nComputer: ${computerScore}`)
    }
    else {
        return true;
    }

}

let userScore = 0;
let computerScore = 0;

while (true) {
    if (checkWin()) {
        console.log("Game ended")
        break;
    }
}

