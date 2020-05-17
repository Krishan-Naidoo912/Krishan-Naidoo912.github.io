// Print Array in Reverse.
console.log("Print Array in Reverse.");
let array1 = [1,2,3,4,5,6,7,8,9,10];
let array2 = ["a","b","c","d","e","f","g"];
console.log("Array 1 Original: " + array1);
console.log("Array 1 Reverse: " + reverseArray(array1));
console.log("Array 2 Original: " + array2);
console.log("Array 2 Reverse: " + reverseArray(array2));

function reverseArray(array) {
	let reverseArray =[]
	array.forEach(item => {
		reverseArray.unshift(item);
	})
	return reverseArray;
}

// Is items Uniform in an Array.
console.log("Is items Uniform in an Array")
let array3 = [1,1,1,1,1,1,1,1,1];
let array4 = [1,1,1,1,1,1,1,1,1];
let array5 = [1,1,1,1,1,1,1,1,1];
let array6 = [1,1,1,1,1,1,1,1,1];
let array7 = ["a","a","a","a","a","a","a","1","a"];

function checkIfArrayIsUniform(array) {
	let uniformNumber = array[0];
	for(var i=1; i < array.length; i++) {
		if(array[i] !== uniformNumber) {
			return false;
		}
	}
	return true;
}

console.log(checkIfArrayIsUniform(array3));
console.log(checkIfArrayIsUniform(array4));
console.log(checkIfArrayIsUniform(array5));
console.log(checkIfArrayIsUniform(array6));
console.log(checkIfArrayIsUniform(array7));

// Sum of Array.
console.log("Sum of Array");
let array8 = [10,20,30,4,5,6,7,8,9];
console.log(array8);

function sumOfArray(array) {
	let sum = 0;
	array.forEach(item => {
		sum = sum + item;
		}
	)
	return sum;
}
console.log(sumOfArray(array8));


// Max number in Array.
console.log("Max number in Array");
let array9 = [1,2,12,3,4,5,6,7,8,9];
console.log(array9);

function maxNumberInArray(array) {
	let maxNumber = 0;
	array.forEach(item => {
		if(item > maxNumber) {
			maxNumber = item;
		}
	})
	 return maxNumber;
}
console.log(maxNumberInArray(array9));