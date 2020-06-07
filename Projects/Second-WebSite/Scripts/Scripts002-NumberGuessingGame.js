let answer = 9;
let userNumber = 1;

while(userNumber != answer) {
	userNumber = Number(prompt("Enter in a number between 1 and 10:"))

	if(Number(userNumber) < 1 || Number(userNumber) > 10) {
		alert("Your number is not within the specified range, try again, please enter a number between 1 and 10:");
	} else if (userNumber === answer) {
		alert("Correct, you guessed the number :-)")
	} else if (userNumber < answer) {
		alert("Your number is too low, guess again");
	} else {
		alert("Your number is too high or you have entered a Letter instead of a Number, guess again")
	}
}