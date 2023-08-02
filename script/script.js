/**
*
* script.js 
* @author - Mazeen
* @date - 1/8/2023 
**/
var availableChoices = ["rock", "paper", "scissors"];

function givenUserChoice(userChoice) {
    var compChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
    if (compChoice === userChoice) {
        document.getElementById("result").innerHTML = `It was a draw! You both chose ${compChoice}`;
    }
    else if ((userChoice === "rock" && compChoice == "scissors") || (userChoice === "paper" && compChoice === "rock") || (userChoice === "scissors" && compChoice === "paper")) {
        document.getElementById("result").innerHTML = `${userChoice} <sup>(user)</sup> beats ${compChoice} <sup>(comp)</sup>. You Win!`;
        document.getElementById("user-score").innerHTML = Number(document.getElementById("user-score").innerHTML) + 1;
    }
    else {
        document.getElementById("comp-score").innerHTML = Number(document.getElementById("comp-score").innerHTML) + 1;
        document.getElementById("result").innerHTML = `${compChoice} <sup>(comp)</sup> beats ${userChoice} <sup>(user)</sup>. You Lose!`;
    }

};

function resetScore() {
    document.getElementById("user-score").innerHTML = "0";
    document.getElementById("comp-score").innerHTML = "0";
    document.getElementById("result").innerHTML = "";
};
