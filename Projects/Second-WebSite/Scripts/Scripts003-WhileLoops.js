//Print all Numbers between -10 and 19
console.log("Print all Numbers between -10 and 19")
let number1 = -10;
while(number1 <=19 ) {
	console.log(number1);
	number1++;
}

//Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40")
let number2 = 10;
while(number2 <= 40) {
	if(number2%2 === 0) {
		console.log(number2);
	}
	number2++;
}

//Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333")
let number3 = 300;
while(number3 <= 333) {
	if(number3%2 != 0) {
	console.log(number3);
	}
	number3++;
}

//Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
let number4 = 5;
while(number4 <= 50) {
	if(number4%5 === 0 && number4%3 === 0) {
		console.log(number4);
	}
	number4++;
}