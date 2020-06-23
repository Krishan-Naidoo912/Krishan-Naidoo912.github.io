//My Shop consisting of product names and prices that are
//randomly generated using npm faker.js

let faker = require('faker');

console.log(`==================`);
console.log(`WELCOME TO MY SHOP`);
console.log(`==================`);

for(i=0; i<10; i++) {
	console.log(faker.commerce.productName() + " - R" +  faker.commerce.price());
}
console.log(`==================`);
console.log(`HAVE A GREAT DAY!`);
console.log(`==================`);