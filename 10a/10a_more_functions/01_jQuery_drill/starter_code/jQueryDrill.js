
	


    //When the concat button is clicked, combine the two strings and output the result
jQuery('#concatButton').on('click',function(){
var concat1 = jQuery("#concatOne").val();
var concat2 = jQuery("#concatTwo").val();
jQuery("#concatResult").text(concat1 + concat2);


});


    // When the add20Button is clicked, get the value of the input, add 20 and place in add20Output
   jQuery('#add20Button').on('click',function(){
var add20one= parseFloat(jQuery("#add20Input").val());
jQuery("#add20Output").text(add20one + 20);

});



    // When the appendButton is clicked, get the value of the input, wrap in <p> tags and append it to the appendOutput
jQuery('#appendButton').on('click',function(){
var appendOne = jQuery("#appendInput" ).val();
appendOne= ("<p>" + appendOne + "</p>");

jQuery('#appendOutput').append(appendOne) 


});