//Select Elements from Screen
let goalColorDisplay = document.querySelector("#goalColorDisplay");
let squares = document.querySelectorAll(".square");
let guessedMessage = document.querySelector('#guessedMessage');
let h1 = document.querySelector("h1");
let resetGameButton = document.querySelector("#resetGameButton");
let easyButton = document.querySelector("#easyButton");
let hardButton = document.querySelector("#hardButton");

let gameMode = 6;

//Generate Array of random RGB Colors
let colors = generateRandomColors(gameMode);

//Set Color to guess and display to player.
let goalColor = generateGoalColor();

goalColorDisplay.textContent = goalColor;

//Repeat for all squares
for(i=0; i<squares.length; i++) {
	//set color of squares to one of list of colors
	squares[i].style.backgroundColor = colors[i];

	//Add click event listener to each square
	squares[i].addEventListener("click", function() {
		//get color clicked
		let clickedColor = this.style.backgroundColor;
		//compare to goal color
		if(clickedColor === goalColor) {
			//If Correct, change H1 background color to goal color and console "Play Again!""
			guessedMessage.textContent = "WELL DONE!"
			h1.style.backgroundColor = goalColor;
			resetGameButton.textContent = "PLAY AGAIN?"
			//Change all squares to goal color
			changeColors(goalColor);
		} else {
			//If Incorrect, change clicked color to body background color and console "Try Again!""
			this.style.backgroundColor="#232323";
			guessedMessage.textContent = "Try Again";
		}
	})
}

easyButton.addEventListener("click", function() {
	easyButton.classList.add("selectedButton");
	hardButton.classList.remove("selectedButton");
	gameMode = 3;
	colors = generateRandomColors(gameMode);
	goalColor = generateGoalColor();
	goalColorDisplay.textContent = goalColor;
	h1.style.backgroundColor = "steelblue";
	for(i=0; i<squares.length; i++) {
		//Because easy only has 3 colors, the below if is true for the first 3 squares, squares aftwards are hidden
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

hardButton.addEventListener("click", function() {
	hardButton.classList.add("selectedButton");
	easyButton.classList.remove("selectedButton");
	gameMode = 6;
	colors = generateRandomColors(gameMode);
	goalColor = generateGoalColor();
	goalColorDisplay.textContent = goalColor;
	h1.style.backgroundColor = "steelblue";
	for(i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

//reset Game
resetGameButton.addEventListener("click", function() {
	resetGameButton.textContent = "NEW COLORS";
	//generate new colors
	colors = generateRandomColors(gameMode);
	//pick a new goal color from the colors array
	goalColor = generateGoalColor()
	//Display Player the new goal color
	//Reset h1 color and Guessed Message
	h1.style.backgroundColor = "steelblue";
	guessedMessage.textContent = "";
	goalColorDisplay.textContent = goalColor;
	//change color of squares to one of list of colors
	for(i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
});

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