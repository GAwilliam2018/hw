

jQuery(document).ready(function() {

jQuery('#submit-btn').click(function(e){
    e.preventDefault();

var myCity = jQuery("#city-type").val();
	jQuery("#city-type").val('');
myCity = myCity.toLowerCase().trim();
console.log(myCity)

if(myCity == "new york" || myCity == "new york city" || myCity == "nyc"){
	jQuery("body").attr("class","nyc")
	
}
else if (myCity =='san fransico' || myCity == 'sf' || myCity=='bay area'){

	jQuery("body").attr('class','sf')
}

else if (myCity =='los angeles' || myCity == 'la' || myCity=='lax'){

	jQuery("body").attr('class','la')
}
else if (myCity =='austin' || myCity == 'atx'){

	jQuery("body").attr('class','austin')
}

else if (myCity =='sydney' || myCity == 'syd'){

	jQuery("body").attr('class','sydney')
}



 });

});


