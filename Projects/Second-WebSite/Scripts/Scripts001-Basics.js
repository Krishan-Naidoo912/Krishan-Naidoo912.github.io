let userName = prompt("Hi There! What is your name?");
alert(`Welcome ${userName} ! Nice to meet you`);

alert(`JS Stalker Exercise:`);
let firstName = prompt(`What is your first name?`);
let lastName = prompt(`What is your last name?`);
let age = prompt(`How old are you?`);
alert(`Welcome ${firstName} ${lastName}!`);
alert(`You are ${age} years old so you may proceed :-)`);

alert(`Now for the age calculator Exercise`);
let age2 = prompt(`How old are you?`);
let daysAlive = age2*365.25 //to cather for leap years;
alert(`You are roughly ${daysAlive} days old :-)`);

let age3 = prompt("Enter in an age")
if(age < 0) {
	alert("Enter a valid age")
} else if (age3 == 21) {
	alert("Happy 21st Birthday")
} else if (age3 % 2 === 1) {
	alert("age is an odd number")
} else {
	alert("age is:" + age3);
}
if(Math.sqrt(age3)% 1 == 0) {
	alert("Also! age is a perfect square")
}
