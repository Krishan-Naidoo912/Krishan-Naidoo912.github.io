//Express Server to learn express server routing
//16 June 2020
//Krishan Naidoo

//Create express server
const express = require('express');
const app = express();

app.get('/', function(req,res) {
	res.send("Hi There! Welcome to my assignment. Playing with Express Server Routing.");
});

app.get("/speak/:animal", function(req,res) {
	let animal = req.params.animal.toLowerCase();
	const sounds = {
		dog: "Woof Woof",
		cat: "Meow Meow",
		bird: "Tweet Tweet"
	}
	res.send(`The ${animal} says ${sounds[animal]}!`);
});

app.get("/repeat/:message/:times", function(req,res) {
	let message = req.params.message;
	let times = Number(req.params.times);
	let repeatedMessage = "";
	console.log('Repeat Message: ' + message);
	console.log('Repeat Times: ' + times);
	for(i=0; i<times; i++) {
		repeatedMessage += message + " ";
	}
	res.send(repeatedMessage);
});

app.get('*', function(req,res) {
	res.send(`You must use routes "localhost:3001/" or "localhost:3001/speak/animal" or "localhost:3001/repeat/message/times"`);
});

app.listen(3001, function() {
	console.log('Express Server Running on Port 3001')
});