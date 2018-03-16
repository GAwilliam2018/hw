// have list o fimmage
var amilalImageList = ["animal1.jpg", "animal2.jpg","animal3.jpg", "animal4.jpg","animal5.jpg","animal6.jpg","animal7.jpg"]

Var 

//know what image we aro onn


//funtionto set immmage 


function setImage(imageNumberSelected ){

//Get the image in imageNumberSelceted positon of the array
// Stt the Src of the image in the Html to the image  name

var newSrc = "images/" + aminalInageList[imageNumberSelceted];

jQuery("#image-to-vote-on").attr('src',newSrc);

//Fuction for nex immage

function nextImage(){
	imageNumber = imageNumber + 1;

	if(imageNumber < animalImageList.length){
		imageNumber=0;
	}
//Function for  previous image
function previousImage(){
	imageNumber = imageNumber -1;
	if(imageNumber<0){

	}
}


	setImage(imageNumber);
	//Bind previos and next buttons to fucntions
	jQuery(document).on('ready',fucntion(){
jQuery('#btnNext').on("click",nextImage());
	};
}
}


