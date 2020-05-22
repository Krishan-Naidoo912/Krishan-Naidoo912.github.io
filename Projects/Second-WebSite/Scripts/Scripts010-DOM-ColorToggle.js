let backgroundColorPurple = false;
let changeButton = document.querySelector("#changeColor")

changeButton.addEventListener("click", function() {
	if(backgroundColorPurple) {
		document.body.style.backgroundColor = "white";	
		backgroundColorPurple = false;
	} else {
		document.body.style.backgroundColor = "purple";
		backgroundColorPurple = true;
	}
})