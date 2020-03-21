
let correctAnswer = generateCorrectAnswer();
let totalTurns = 3;
let currentTurn = 1;
let gameOver = false;
let answersList = [];

//generates random number btwn 1 and 100. This is the number that wins the game
function generateCorrectAnswer(){
    return Math.ceil(Math.random() * 100);
}



function gameLoop(){
    //tried to make the condition !this.gameOver but it failed
    //while(!gameOver){
        //why does .value work here, how do you know this is part of the api
        let currentGuess = document.getElementById("inputBox").value;    
        
        if(currentGuess !== correctAnswer && currentGuess !== ""){
            currentTurn = currentTurn + 1;
            document.getElementById("rightOrWrong").textContent = "Wrong answer, try again!";
            document.getElementById("inputBox").value = '';
        }
        //check if game is over
        if(currentTurn > totalTurns){
            console.log("you lose");
            gameOver = true;
            document.getElementById("gameOverMessage").textContent = "Game over! You lose!";
            
        }
    //}

}

let submitButton = document.getElementById("inputBoxButton");
submitButton.addEventListener('click', function(){
    if(document.getElementById("inputBox").value === ''){
        alert("Text box must not be empty!");
    }
    else{
        answersList.push(document.getElementById("inputBox").value);
        console.log("previous answers")
        for(let i = 0; i < answersList.length; i++){
            console.log(answersList[i]);
        }
        gameLoop();
    }
});


