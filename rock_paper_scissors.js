// function computerChoice () {
//     let availableGuesses =  3;
//     let choice = Math.floor(Math.random() * availableGuesses);
    
//     if (choice === 0) {
//         return "rock";
//     }
//     else if (choice === 1) {
//         return "paper";
//     }
//     else {
//         return "scissors";
//     }
// }

// function checkWin () {
//     userChoice = prompt("Enter your choice (Rock, paper, scissors)\nSingle click any element to continue and double click any element cancel the game").toLocaleLowerCase();
//     let choiceOfComputer = computerChoice();
//     if (choiceOfComputer === userChoice) {
//         console.log("It is a draw");
//     }
//     else if (choiceOfComputer === "rock" && userChoice === "paper") {
//         userScore += 1;
//         console.log(`Player won: Paper beats rock \nPlayer: ${userScore}\nComputer: ${computerScore}`)
//     }
//     else if (choiceOfComputer === "paper" && userChoice === "scissors") {
//         userScore += 1;
//         console.log(`Player won: Scisors beats paper\nPlayer: ${userScore}\nComputer: ${computerScore}`)
//     }
//     else if (choiceOfComputer === "paper" && userChoice === "rock") {
//         computerScore += 1;
//         console.log(`Computer won Paper beats rock\nPlayer: ${userScore}\nComputer: ${computerScore}`)
//     }
//     else if (choiceOfComputer === "scissors" && userChoice === "paper") {
//         computerScore += 1;
//         console.log(`Computer won Scissors beat Paper\nPlayer: ${userScore}\nComputer: ${computerScore}`)
//     }
//     else if (choiceOfComputer === "rock" && userChoice === "scissors") {
//         computerScore += 1;
//         console.log(`Computer won Rock beats scissors\nPlayer: ${userScore}\nComputer: ${computerScore}`)
//     }
//     else if (choiceOfComputer === "scissors" && userChoice === "rock") {
//         userScore += 1;
//         console.log(`Player won Rock beats scissors\nPlayer: ${userScore}\nComputer: ${computerScore}`)
//     }
//     else {
//         return true;
//     }

// }

// let userScore = 0;
// let computerScore = 0;

// while (true) {
//     if (checkWin()) {
//         console.log("Game ended")
//         break;
//     }
// }
computerScore = 0
userScore = 0

button = document.querySelector("button")
const user_guess = () => {
    let userChoice = prompt("Enter your choice (Rock, paper, scissors)").toLowerCase();

    let availableGuesses =  3;
    let computerChoice = Math.floor(Math.random() * availableGuesses);

    let display = document.querySelector(".display");
    display.innerHTML = ""
    display.classList.add("flex-mode")
    
    if (userChoice === "rock") {
        let imgElement = document.createElement("img")
        imgElement.src = "download.jpeg"
        imgElement.alt = "Picture of a rock"
        display.appendChild(imgElement)

    }
    else if (userChoice === "paper") {
        let imgElement = document.createElement("img")
        imgElement.src = "vector-a4-paper-transparent-background_149152-359.avif"
        imgElement.alt = "Picture of a paper"
        display.appendChild(imgElement)
    }
    else if (userChoice === "scissors") {
        let imgElement = document.createElement("img")
        imgElement.src = "scissors-11530930320bknx7gpoba.png"
        imgElement.alt = "Picture of a scissors"
        display.appendChild(imgElement)
    }
    // else {
    //     if (computerScore > userScore) {

    //     }
    // }

    let versus = document.querySelector(".display")
    let versusDiv = document.createElement("h1")
    versusDiv.textContent = "VS"
    versus.appendChild(versusDiv)


    if (computerChoice === 0) {
        let imgElementComputer = document.createElement("img")
        imgElementComputer.src = "download.jpeg"
        imgElementComputer.alt = "Picture of a rock"
        display.appendChild(imgElementComputer)
        computerChoice = "rock"

    }
    else if (computerChoice === 1) {
        let imgElementComputer = document.createElement("img")
        imgElementComputer.src = "vector-a4-paper-transparent-background_149152-359.avif"
        imgElementComputer.alt = "Picture of a paper"
        display.appendChild(imgElementComputer)
        computerChoice = "paper"
    }
    else {
        let imgElementComputer = document.createElement("img")
        imgElementComputer.src = "scissors-11530930320bknx7gpoba.png"
        imgElementComputer.alt = "Picture of a scissors"
        display.appendChild(imgElementComputer)
        computerChoice = "scissors"
    }

    checkWin(userChoice, computerChoice)
    
}



function checkWin (userChoice, choiceOfComputer) {
    let result = document.querySelector(".btn")
    let resultDiv = document.createElement("h2")
    // resultDiv.innerHTML = ""


    if (choiceOfComputer === userChoice) {
        resultDiv.textContent = "It is a draw";
    }
    else if (choiceOfComputer === "rock" && userChoice === "paper") {
        userScore += 1;
        resultDiv.textContent = `Player won: Paper beats rock \nPlayer: ${userScore}\nComputer: ${computerScore}`
    }
    else if (choiceOfComputer === "paper" && userChoice === "scissors") {
        userScore += 1;
        resultDiv.textContent = `Player won: Scisors beats paper\nPlayer: ${userScore}\nComputer: ${computerScore}`
    }
    else if (choiceOfComputer === "paper" && userChoice === "rock") {
        computerScore += 1;
        resultDiv.textContent =  `Computer won Paper beats rock\nPlayer: ${userScore}\nComputer: ${computerScore}`
    }
    else if (choiceOfComputer === "scissors" && userChoice === "paper") {
        computerScore += 1;
        resultDiv.textContent = `Computer won Scissors beat Paper\nPlayer: ${userScore}\nComputer: ${computerScore}`
    }
    else if (choiceOfComputer === "rock" && userChoice === "scissors") {
        computerScore += 1;
        resultDiv.textContent =  `Computer won Rock beats scissors\nPlayer: ${userScore}\nComputer: ${computerScore}`
    }
    else if (choiceOfComputer === "scissors" && userChoice === "rock") {
        userScore += 1;
        resultDiv.textContent = `Player won Rock beats scissors\nPlayer: ${userScore}\nComputer: ${computerScore}`
    }
    // else {
    //     return true;
    // }

    result.appendChild(resultDiv)

}


button.addEventListener("click", user_guess);
