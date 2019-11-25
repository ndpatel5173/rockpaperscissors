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
        var computerChoice1 = rock; 
    }
    else if(num < 0.60 && num >= 0.30){
         $("#computerChoice").text("paper");
        var computerChoice2 = paper;
    }
    else if(num < 0.30 && num >=0){
         $("#computerChoice").text("scissors");
        var computerChoice3 = scissors;
    }
//else if statements for comparing
    // userChoice = answer      computerChoice = answer2
    let answer1 = rock
    let answer2 = paper
    let answer3 = scissors
    //let answer2 = $("#computerChoice").val();

    if(answer1 === computerChoice1){
        $("#result").text("TIE!!!");
    }
    else if(answer2 === computerChoice2){
        $("#result").text("TIE!!!");
    }
    else if(answer3 === computerChoice3){
        $("#result").text("TIE!!!");
    }
});


// DOCUMENT READY FUNCTION BELOW

