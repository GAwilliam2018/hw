document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;

function switchGray() {
  
		jQuery("body").css("background","gray");
jQuery("body").css("background","white");

  document.body.style.backgroundColor = 'gray';
 

 document.body.style.color = 'white';
}

function switchWhite() {
  		jQuery("body").css("background","gray");
jQuery("body").css("background","black");


  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}
