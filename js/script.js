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
        //console.log("rock");
    }
    else if(num < 0.60 && num >= 0.30){
         $("#computerChoice").text("paper");
        //console.log("paper");
    }
    else if(num < 0.30 && num >=0){
         $("#computerChoice").text("scissors");
        //console.log("scissors");
    }
//else if statements for comparing
});


// DOCUMENT READY FUNCTION BELOW

