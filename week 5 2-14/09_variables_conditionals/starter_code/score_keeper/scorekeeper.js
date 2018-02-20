// Function to add 5

var theScore=0;

function addFive(){
	theScore=5+theScore;
jQuery("#result").text(theScore)

}



//Function to add 10
function addTen(){
	theScore=10+theScore;
jQuery("#result").text(theScore)
}

function subTractOne(){
	
	theScore = theScore -1;
	jQuery("#result").text("theScore")
}

jQuery(document).ready(function(){
	jQuery("#add5").click(function(){
	addFive();
	})


});
