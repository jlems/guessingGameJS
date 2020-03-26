let correctAnswer = generateCorrectAnswer();
console.log("answer is: " + correctAnswer);
let totalTurns = 3;
let currentTurn = 1;
let answersList = [];

function resetValues(){
    correctAnswer = generateCorrectAnswer();
    console.log("From resetValues: answer is: " + correctAnswer);
    totalTurns = 3;
    currentTurn = 1;
    answersList = [];
    document.getElementById("gameOverMessage").textContent = '';
    document.getElementById("rightOrWrong").textContent = '';
    document.getElementById("inputBox").value = '';
    document.getElementById("higherLower").textContent = '';
}

//generates random number btwn 1 and 100. This is the number that wins the game
function generateCorrectAnswer(){
    return Math.ceil(Math.random() * 100);
}

function gameLoop(){
    //why does .value work here, how do you know this is part of the api
    document.getElementById("rightOrWrong").textContent = "";
    let currentGuess = parseInt(document.getElementById("inputBox").value);    
    
    //win condition
    if(currentGuess === correctAnswer){
        document.getElementById("gameOverMessage").textContent = "You win!";
        playAgain();
    }
    //user guess incorrectly
    else{
        answersList.push(currentGuess);
        currentTurn = currentTurn + 1;
        document.getElementById("rightOrWrong").textContent = "Wrong answer, try again!";
        document.getElementById("inputBox").value = '';
        displayGuesses(answersList);
        if(currentGuess > correctAnswer){
            document.getElementById("higherLower").textContent = "Your current Guess is too high";
        }
        else{
            document.getElementById("higherLower").textContent = "Your current Guess is too low";

        }
    }
    //check if game is over
    if(currentTurn > totalTurns){
        document.getElementById("gameOverMessage").textContent = "Game over! You lose!";
        playAgain();
    }
}

function displayGuesses(guessesList){
    let stringToDisplay = '';
    for(i = 0; i < guessesList.length; i++){
        stringToDisplay = stringToDisplay + guessesList[i] + ", ";
    }
    document.getElementById("guessesList").textContent = stringToDisplay;
}

function playAgain(){
    if(confirm("Play again?")){
        resetValues();
    }
}

function resetToStart(){

}

let submitButton = document.getElementById("inputBoxButton");
submitButton.addEventListener('click', function(){
    if(document.getElementById("inputBox").value === ''){
        alert("Text box must not be empty!");
    }
    else{
        gameLoop();
    }
});


