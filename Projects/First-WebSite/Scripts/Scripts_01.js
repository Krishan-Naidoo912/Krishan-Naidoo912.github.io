/*First Javascript File*/
var runJavaScriptFile = prompt("Do you want to run JavaScripts from the JavaScript File? (yes/no): ");
if(runJavaScriptFile == "yes") {
/*Exercise 1: Calculator.*/
	alert("This will start the JavaScript exercises that is loaded from a JavaScript File.");
	alert("Thereafter, you will return to my JavaScript Web Page and work with the code for these exercises in the browser console.");
	var firstNumber = prompt("Enter in first Number: ");
	var secondNumber = prompt("Enter in second Number: ");
	var sum = Number(firstNumber) + Number(secondNumber);
	alert("The Sum of " + firstNumber + " and " + secondNumber + " is: " + sum);

/*Exercise 3: Keyless Car.*/
	var driverAge = prompt("What is your age? ");
	if(driverAge < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
	} else if(driverAge == 18) {
	alert("You are 18, Congradulations on your first year of driving. Enjoy the ride!");
	} else if(driverAge > 18) {
	alert("You are over 18, Powering On. Enjoy the ride!");
	} else
		alert("Please enter in a valid age number!");
		alert("That the end of the JavaScript File, continue to Web Page on more JavaScript!");
}

/*Exercises using functions*/
/*Exercise 2: Calculator with Functions.*/
var runJavaScriptFile = prompt("Do you want to run JavaScripts from the JavaScript File USING FUNCTIONS? (yes/no): ");
if(runJavaScriptFile == "yes")
	{
		alert("This will start the JavaScript exercises that is loaded from a JavaScript File, using functions.");
		alert("Thereafter, you will return to my JavaScript Web Page and work with the code for these exercises in the browser console.");
		function Add(a,b) {
			var sum = a+b;
			alert("The Sum of " + a + " and " + b + " is: " + sum);
		}
		var firstNumber = prompt("Enter in first Number: ");
		var secondNumber = prompt("Enter in second Number: ");
		Add(Number(firstNumber),Number(secondNumber));

/*Exercise 4: Keyless Car with Function DECLARATION.*/
		function checkDriverAge() {
			var driverAge = prompt("What is your age? ");
			if(driverAge < 18) {
			alert("Sorry, you are too young to drive this car. Powering off");
			} else if(driverAge == 18) {
			alert("You are 18, Congradulations on your first year of driving. Enjoy the ride!");
			} else if(driverAge > 18) {
			alert("You are over 18, Powering On. Enjoy the ride!");
			} else
				alert("Please enter in a valid age number!");
				alert("That the end of the JavaScript File, continue to Web Page on more JavaScript!");
		}
		checkDriverAge();

/*Exercise 5: Keyless Car with Function EXPRESSION.
		var driverAge2 = function() {
		var driverAge = prompt("What is your age? ");
		if(driverAge < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
		} else if(driverAge == 18) {
		alert("You are 18, Congradulations on your first year of driving. Enjoy the ride!");
		} else if(driverAge > 18) {
		alert("You are over 18, Powering On. Enjoy the ride!");
		} else
			alert("Please enter in a valid age number!");
			alert("That the end of the JavaScript File, continue to Web Page on more JavaScript!");
		}
		driverAge2();

	Exercise 6: Keyless Car with Function EXPRESSION with Return.
		function checkDriverAge3(driverAge3) {
			if(driverAge3 < 18) {
			alert("Sorry, you are too young to drive this car. Powering off");
			} else if(driverAge3 == 18) {
			alert("You are 18, Congradulations on your first year of driving. Enjoy the ride!");
			} else if(driverAge3 > 18) {
			alert("You are over 18, Powering On. Enjoy the ride!");
			} else
				alert("Please enter in a valid age number!");
				alert("That the end of the JavaScript File, continue to Web Page on more JavaScript!");
		}
		checkDriverAge3(30);*/
}

/*Exercise 7: Arrays: Manipulation.*/
var array = ["Banana", "Apples","Oranges","Blueberries"];
// 1. Remove the Banana from the array.
array.shift();
// 2. Sort the array in order.
array.sort();
// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
// 4. Remove "Apples" from the array.
array.shift();
// 5. Sort the array in reverse order.
array.sort();
array.reverse();

/*Exercise 8: Arrays: Accessing Values.*/
var array3 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array3[1][1][0];

/*Exercuse 9: Objects (For facebook Exercise).*/
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var facebookUser1 = {
	username: "Krishan",
	password: "naidoo",
};
// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
	{
		username: "Krishan",
		password: "naidoo",
	}
];
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Krishan",
		timeline: "Celebrating Happy Living with whole Family!",
	},
	{
		username: "Sha",
		timeline: "Received award for most amazing wining food menu!",
	},
	{
		username: "Keyuri",
		timeline: "Received Oscar award for amazing superstar performance!",
	},
	{
		username: "Sayuri",
		timeline: "Won Miss Universe, a true beauty queen!",
	},
	{
		username: "Sayuran",
		timeline: "Won another Championship! King of the race track!",
	},
	{
		username: "Menakay",
		timeline: "Received lifetime achievement award for Loving and care to all!",
	}
];

/*Exercuse 10: Objects (For facebook Login Exercise).*/
