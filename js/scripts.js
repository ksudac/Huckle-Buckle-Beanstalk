var theNumber = null;
var numGuess = 0;
var numberSelected = false;
var previousGuess = null;
 
function numberInitalized(){
    if (!numberSelected){
        init();
    }
    else{
        numGuess++;
        compareUserGuess(theNumber, numGuess);
    }
}
 
 
function init(){
    theNumber = Math.floor((Math.random()*100)+1);
    numGuess = 1;
    numberSelected = true;
    compareUserGuess(theNumber, numGuess);
}
 
    
function compareUserGuess(theNumber, numGuess){
    
    var playerGuess = document.getElementById('userGuess').value;
    var theDifference = 0;
    var previousDifference;
    var temperature = null;

    
    theDifference = Math.abs(playerGuess-theNumber);
    previousDifference = Math.abs(previousGuess - theNumber);

    if(theDifference < previousDifference){
       temperature = 'Hotter';
    }
    else{
        temperature = 'Colder';
    }
    
    if(parseInt(playerGuess) === parseInt(theNumber)){
        alert('You got it in ' + numGuess + ' guesses!' + ' The Number: ' + theNumber);
    }
    else if (playerGuess > theNumber){
        alert('Your getting ' + temperature + '! ' + playerGuess + ' is too high!');
    }
    else {
        alert('Your getting ' + temperature + '! ' + playerGuess + ' is too low!');
    }  
    
    previousGuess = playerGuess;
}