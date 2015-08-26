
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var secretNumber = Math.floor(Math.random() * (100-1) + 1);
  	var myCounter = 0;
  	var myMsg = "test";

  	function newGame() {
     	secretNumber = Math.floor(Math.random() * (100-1) + 1);
  		$("#feedback").empty();
  		$("#feedback").append("Make your Guess!");

  		$("#guessList").empty(".lastGuess");

  		$("#count").empty();
  		myCounter = 0;

    	$("#count").append(0);

    	
	  	$("input[name=userGuess]").val("");
    	$("#userGuess").attr("placeholder", "Enter your Guess");
	}

  	$("a.new").click(function(){

  		newGame();
  		
  	});


  	$("#guessButton").click(function(){

    	event.preventDefault();

    	myCounter++;

    	

 
    	var userGuess = $("input[name=userGuess]").val();

    	userGuess = +userGuess;

    	console.log(secretNumber);
    	console.log(userGuess);


    	$("#count").empty();
    	$("#count").append(myCounter);
    	$("#guessList").append('<li class="lastGuess">' + userGuess + '</li>');
    

    	if (+userGuess === secretNumber) {

    		myMsg = "You've guessed the Secret Number!";
    		alert("Congrats you guessed!");

    	} else if (userGuess + 10 > secretNumber && userGuess - 10 < secretNumber) {

    		myMsg = "You are very hot";

    	} else if(userGuess + 20 > secretNumber && userGuess - 20 < secretNumber) {

    		myMsg = "You are hot";

    	} else if(userGuess + 30 > secretNumber && userGuess - 30 < secretNumber) {

    		myMsg = "You are warm";

    	} else if(userGuess + 40 > secretNumber && userGuess - 40 < secretNumber) {

    		myMsg = "You are cold";

    	} else if(userGuess + 50 > secretNumber && userGuess - 50 < secretNumber) {

    		myMsg = "You are ice cold";

    	} else {

    		myMsg = "Welcome to polo North!";

    	};

    	$("#feedback").empty();
    	$("#feedback").append(myMsg);
    
        
    
 
    });

  

});


