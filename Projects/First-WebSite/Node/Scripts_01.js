//Javascripts 01 for Node.js Lessons.
//by Krishan Naidoo.
//Run the node command "node Scripts_03_Node.js", this will import scripts from Scripts_04_Node.js into const scripts2.


//use the below const to import function from Script_04_Node.js
//instead of the new ES6 import function
const script = require('./Scripts_02.js');
const largeNumber = script.largeNumber;

let firstName = 'Krishan';
let surName = 'Naidoo';
let fullName = `${firstName} ${surName}`;

//console.log after 3 seconds
setTimeout(() => {
	console.log(fullName);
	console.log(largeNumber);
	},3000
);

//node built-in modules.

//A. Read file using 'fs' and console log the contents after 5 seconds.
let fs = require('fs')
const readAfile = fs.readFileSync('./Scripts_02.js','utf8');
setTimeout(() => {
	console.log("Here is the contents of ./Scripts_02.js")
	console.log(readAfile);
	},5000
);

//B. 'http'
//let http = require('http')

//C. npm package nodemon.
//start by running npm init -y to include npm
//then run npm install nodemon --save-dev, this will add to devDependancies so that these nodemon doe not upload to github
//then add "start":"nodemon" to package.json "scripts" as a property so that every refresh of the script file are automatically processed in the node console.




