//Generate Array of random RGB Colors
let colors = generateRandomColors(6);

//Set Color to guess and display to player.
let goalColor = generateGoalColor();
let goalColorDisplay = document.querySelector("#goalColorDisplay");
goalColorDisplay.textContent = goalColor;

let squares = document.querySelectorAll(".square");
let guessedMessage = document.querySelector('#guessedMessage');
let h1 = document.querySelector("h1");

//Repeat for all squares
for(i=0; i<squares.length; i++) {
	//set color of squares to one of list of colors
	squares[i].style.backgroundColor = colors[i];

	//Add click event listener to each square
	squares[i].addEventListener("click", function() {
		//get color clicked
		clickedColor = this.style.backgroundColor;
		//compare to goal color
		if(clickedColor === goalColor) {
			//If Correct, change H1 background color to goal color and console "Play Again!""
			guessedMessage.textContent = "Well Done! Play Again?"
			h1.style.backgroundColor = goalColor;
			//Change all squares to goal color
			changeColors(goalColor);
		} else {
			//If Incorrect, change clicked color to body background color and console "Try Again!""
			this.style.backgroundColor="#232323";
			guessedMessage.textContent = "Try Again";
		}
	})
}

//When color guessed, change all squares to that color
function changeColors(color) {
	//loop through all squares
	for(i=0; i<squares.length; i++) {
		//change each color to match goal color
		squares[i].style.backgroundColor = color;	
	}
}

//generate list of random RGB Colors and return an array of rgb colors
function generateRandomColors(num) {
	let colorArray = []
	for(i=0; i<num; i++) {
		//generate random color for each element in the colors array
		colorArray.push(generateRandomColor());
	}
	return colorArray;
}

//Generate Random color and return to GenerateRandomColors()
function generateRandomColor() {
	//Generate Red
	let red = Math.floor(Math.random() * 256);
	//Generate Green
	let green = Math.floor(Math.random() * 256);
	//Generate Blue
	let blue = Math.floor(Math.random() * 256);
	return(`rgb(${red}, ${green}, ${blue})`);
}

//Generate random goal Color from colors Array
function generateGoalColor() {
	let random = Math.floor(Math.random() * colors.length)
	return colors[random];
}