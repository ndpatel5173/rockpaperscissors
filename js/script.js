// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
    let answer = $("#input").val();
    $("#userChoice").text(answer);

//else if conditionals for computer
    var num = Math.random();
       console.log(num);
    if (num >= 0.60){
         $("#computerChoice").text("rock");
        var computerChoice1 = "rock"; 
    }
    else if(num < 0.60 && num >= 0.30){
         $("#computerChoice").text("paper");
         var computerChoice2 = "paper";
    }
    else if(num< 0.30 && num >= 0){
         $("#computerChoice").text("scissors");
         var computerChoice3 = "scissors";
    }
//else if statements for comparing
    if((answer === "rock") && (computerChoice1 === "rock")){
         $("#result").text("TIE!!!");
    }
    else if((answer === "rock") && (computerChoice2 === "paper")){
         $("#result").text("Computer Wins!!!");
    }
    else if((answer === "rock") && (computerChoice3 === "scissors")){
         $("#result").text("You Win!!!");
    }

    else if((answer === "paper") && (computerChoice2 === "paper")){
         $("#result").text("TIE!!!");
    }
    else if((answer === "paper") && (computerChoice1 === "rock")){
         $("#result").text("You Win!!!");
    }
    else if((answer === "paper") && (computerChoice3 === "scissors")){
         $("#result").text("Computer Wins!!!");
    }

    else if((answer === "scissors") && (computerChoice3 === "scissors")){
         $("#result").text("TIE!!!");
    }
    else if((answer === "scissors") && (computerChoice1 === "rock")){
         $("#result").text("Computer Wins!!!");
    }
    else if((answer === "scissors") && (computerChoice2 === "paper")){
         $("#result").text("You Win!!!");
    }
});


// DOCUMENT READY FUNCTION BELOW

