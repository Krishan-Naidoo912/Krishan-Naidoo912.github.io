//Function to check if number is even.

console.log("Function to check if number is even:")

function isEven(number) {
	if(number%2 === 0) {
		return true;
	} else {
		return false;
	}
}

isEven(4);
isEven(21);
isEven(68);
isEven(333);

//Function which accepts a single numeric argument and returns the factorial of that number

console.log("//Function which accepts a single numeric argument and returns the factorial of that number:")

function factorial(number) {
	let result = 1;
	for(i=1; i<=number; i++) {
		result = result * i
	}
	return result;
}

//Function to kebabToSnake() which accepts a single kebab-cased string argument and returns the snake_cased version
console.log("Function to kebabToSnake() which accepts a single kebab-cased string argument and returns the snake_cased version");

function kebabToSnake(userString) {
	let changedString = userString.replace(/-/g,"_");
	return changedString;
}

//Set Interval

function singSing() {
	console.log("Twinkle Twinkle Star!");
}

// setInterval(singSing,1000);