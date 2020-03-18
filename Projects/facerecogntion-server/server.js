//Express Server for React App Face Recognition

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const database = {
	users: [
		{
			id:'1',
			name:'Krishan',
			email:'krishan@gmail.com',
			password:'krishan',
			entries: 0,
			joined: new Date(),
		},
		{
			id:'2',
			name:'Naidoo',
			email:'naidoo@gmail.com',
			password:'naidoo',
			entries: 0,
			joined: new Date()
		}
	]
}

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res) => {
	res.send(database.users);
});

//Sign In - req=Post, res=user object
app.post('/signin', (req,res) => {
	if(req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
		res.json(database.users[0])
	} else {
		res.status(400).json('try again!')
	}
}
);


//Register - req=Post, res=database of users
app.post('/register',(req,res) => {
	database.users.push(
		{
			id: Math.floor(Math.random() * 100),
			name:req.body.name,
			email:req.body.email,
			password:req.body.password,
			entries: 0,
			joined: new Date()
		}
	);
	res.json(database.users[database.users.length-1]);
});


//Image - req=Put, res count of id

app.listen('3001', () => {
	console.log('Server running on port 3001');
	}
);
