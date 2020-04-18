//const btn_clear = document.getElementById("clear");
const screen = document.getElementById("screen");
let evaluatedResult = false;

//btn_clear.addEventListener("click", function() {
//creen.value ="";
//

function clearScreen() {
	screen.value = "";
}

function addToScreen(num) {
	if (evaluatedResult) {
		screen.value="";
		evaluatedResult=false
	}
		screen.value = screen.value + num;
}

function backSpace() {
	screen.value = screen.value.substr(0,screen.value.length-1);
}

function result() {
	let exp = screen.value;
	if(screen.value){
		screen.value=`Result: ${eval(screen.value)}`;
		evaluatedResult=true;
	}
}