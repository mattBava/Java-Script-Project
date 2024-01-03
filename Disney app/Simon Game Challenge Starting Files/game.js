var buttonColors = ["red","blue","green","yellow"];
var randomChosenColor = null;
var gamePattern = [];
var userClickPattern = [];
var started = false;

var level = 0;

function nextSequence(){
    userClickPattern = [];


var randomNumber = Math.floor(Math.random()*4);
randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor); 
$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);

  $("h1").text("level "+ level);
level++;



}

$(".btn").on("click",function(){
    var userChosenColor = this.id;
    userClickPattern.push(userChosenColor)
    playSound(this.id);
    animatePress(this.id);
    
    checkAnswer(userClickPattern.length-1);
});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
audio.play();
} 


function animatePress(currentColor){
$("#" + currentColor).addClass("pressed");
setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
},100)

}

$(document).on("keypress",function(){
    if(started === false){
         started = true;
         nextSequence();
       
    }
       
} );
function checkAnswer(currentLevel){

if(userClickPattern[currentLevel] === gamePattern[currentLevel])
{
    console.log("right")
    if (userClickPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

}
else{
    console.log("wrong")
    $("body").addClass("game-over");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    setTimeout(function () {
        $("body").removeClass("game-over");
      }, 1000);
      $("h1").text("Game over Press any Key to restart");
      startOver();

}

};

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}