



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
	var computerChoiceNumber = Math.random();
	if(computerChoiceNumber< 0.333){
		return 'rock';

	}else if (computerChoiceNumber < 0.667){
			return 'paper';
		else{
			return 'scissors';
		}
	}
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {
//Display the computer's choice
jQuery("#computerSelection").text(opponent);
//Determine who wins

if (opponent == "rock" && me== "scissors"){
	return "computer wins"
}
else if (opponent =="scissors" && me == "rock"){
	return "I win"
	else if (opponent== "paper" && me == "rock"){
		return "computer wins"

	}
}
// Display the winner

function compare(me, opponent){

	jQuery('#computerSelection').text (opponent);
}if(me == opponent){
	return 'tie';

}else if (true) {}

};



jQuery( document ).ready(function() {
jQuery("scissors").click(function(e) {
preventDefault();

var computerPlayerChoice = computerChoice
	// body...
})

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html


});
