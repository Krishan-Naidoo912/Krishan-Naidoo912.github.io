//Express Server for FaceRecognition React App.
//by Krishan Naidoo.

//Create express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//create database for users
const database = {
	users: [
		{
			id:'12',
			name:'Krishan',
			email:'krishan@gmail.com',
			password:'naidoo',
			entries:0,
			joined: new Date(),
		},
		{
			id:'123',
			name:'Naidoo',
			email:'naidoo@gmail.com',
			password:'krishan',
			entries:0,
			joined: new Date(),
		}
	]
}

//install npm package cors to tell google chrome to trust this express server when connecting to the App.js React App
const cors = require('cors');

//now npm install bcrypt node package to hash user passwords
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


app.use(bodyParser.json());
app.use(cors());

//create route to confirm app is running
app.get('/',(req, res) => {
	res.send(database.users);
	}
);

//Sign In: POST = username, RESPONSE = 'Success\Fail'
app.post('/signin', (req,res) => {
	if(req.body.email === database.users[0].email &&
		req.body.password === database.users[0].password) {
		res.json('Succesfully Logged in!');
	} else {
		res.status(400).json('Error Logging in')
	}
	}
);

//Register: POST = username, RESPONSE = 'Success\Fail'
//push new user to database variable
app.post('/register',(req,res) => {
	database.users.push(
		{
			id: Math.floor(Math.random() * 100),
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			entries: 0,
			joined: new Date()
		}
	);
	//now respond with the last user created in the array
	res.json(database.users[database.users.length-1]);
}
);


//Profile/:userID: GET request to accept a user profile and repspond with home page of user (i.e ranking and image input)
//pass user details in the GET request.
//then validate if the ID in the GET parameter matches an id in the users Database
app.get('/profile/:id', (req,res) => {
	let userExist = false;
	database.users.forEach(user => {
		if(user.id === req.params.id) {
			userExist = true;
			return res.json(user);
		}
	});
	if(!userExist) {
		res.status(400).json('user does not exist.'); 
	}
});

//Image: PUT request to accept users id and update count of user pasting image for face recognition
app.post('/image', (req,res) => {
	let userExist = false;
	database.users.forEach(user => {
		if(user.id === req.body.id) {
			userExist = true;
			user.entries++;
			return res.json(user.entries);
		}
	});
	if(!userExist) {
		res.status(400).json('user does not exist');
	}
});

app.listen('3001', () => {
	console.log('Your app is running on port 3001.');
	}
);