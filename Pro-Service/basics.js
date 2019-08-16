document.getElementsByClassName("slider-left")[0].onclick = sliderLeft;
document.getElementsByClassName("slider-right")[0].onclick = sliderRight;
var left = 0;
function sliderLeft(){
	left-=750;
	var line = document.getElementsByClassName('line');
	if(left<-750*3) left =0 ;
	line[0].style.left = left+'px';
}
function sliderRight(){
	left+=750;
	var line = document.getElementsByClassName('line');
	if(left>0) left = -3*750;
	line[0].style.left = left+'px';
}