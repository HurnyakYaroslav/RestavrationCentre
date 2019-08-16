
function showCustomMenu(sign, x, y) {
// alert(document.body.style.background);
var cm = document.getElementById("custommenu"); 
/* Змінна cm буде вказувати на наше «меню» */

	if(sign) {
	/* Якщо передано параметр sign, рівний true, то меню покажемо, а інакше приховаємо */
		cm.style.visibility = 'visible';
	}
		else {
		cm.style.visibility = 'hidden';
	}
/* Задаємо меню абсолютну позицію та встановлюємо координати його лівого верхнього кута */
	cm.style.position = 'absolute';
	cm.style.left = x + 'px';
	cm.style.top = y + 'px';
}
var i = 0;
function doAction(actionType)
{
	switch(actionType) {

		case "close":
			window.close();
		
		break;
		case "fontIncrease":
			// document.body.style.fontSize="20pt";
			document.getElementById("mytext").style.fontSize = "20pt";
		break;
		case "fontDecrease":
			// document.body.style.fontSize="8pt";
			document.getElementById("mytext").style.fontSize = "8pt";
		break;
		case "changeBkg":
			switch(i){
				case 0:
					i++;
					document.body.style.background="white";
				break;
				case 1:
					i++;
					document.body.style.background="maroon";
				break;
				case 2:
					i++;
					document.body.style.background="blue";
				break;
				case 3:
					i=0;
					document.body.style.background="green";
				break;
			}
			// continue;
		break;
		case "goToGoogle":
			document.location.href = "http://www.google.com";
		break;

	}
}
