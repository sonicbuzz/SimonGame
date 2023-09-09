
var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound("sounds/" + userChosenColour + ".mp3");
  checkAnswer(userClickedPattern.length-1);
});

var started=false;
var level =0;
$(document).keypress(function(){
  if(started==false)
  {
    $("#level-title").text("Level "+ level);
    nextSequence();
    started=true;
   
  }
});

function checkAnswer(currentLevel)
{
 if(userClickedPattern[currentLevel]==gamePattern[currentLevel])
 {
  console.log("Success");
  if (userClickedPattern.length === gamePattern.length){

    //5. Call nextSequence() after a 1000 millisecond delay.
    setTimeout(function () {
      nextSequence();
    }, 1000);

  }

 }
 else {
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over")
  },1000);
  $("#level-title").text("Game Over, Press Any Key to Restart");
  startSequence();
  

 }
}

function startSequence()
{
  level=0;
  started=false;
  gamePattern=[];
}



function nextSequence(){
  userClickedPattern = [];

  level=level+1;
  $("#level-title").text("Level "+ level);
randomNumber = Math.floor(Math.random()*4);
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

function playSound(name)
{
  var audio = new Audio(name);
  audio.play();
}

function animatePress(currentColour)
{
  $(".btn").click(function(){
    $("#"+ currentColour).addClass("pressed");
    setTimeout(function(){
      $("#"+ currentColour).removeClass("pressed"); 
    },100);

  })
}






  