document.getElementById("slider-left").onclick = sliderLeft;
document.getElementById("slider-right").onclick = sliderRight;
var left = 0;
function sliderLeft(){
	left-=750;
	var line = document.getElementById('line');
	if(left<-750*8) left =0 ;
	line.style.left = left+'px';
}
function sliderRight(){
	left+=750;
	var line = document.getElementById('line');
	if(left>0) left = -8*750;
	line.style.left = left+'px';
}