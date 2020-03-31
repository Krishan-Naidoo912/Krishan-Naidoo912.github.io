//Express Server for FaceRecognition React App.
//by Krishan Naidoo.

//Create express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//create knex connection to postsql db for user logins
const knex = require('knex');
const postgresDB = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: 'krishan',
		database: 'smart-brain-face-recognition'
	} 
})
//install npm package cors to tell google chrome to trust this express server when connecting to the App.js React App
const cors = require('cors');
//now npm install bcrypt node package to hash user passwords
const bcrypt = require('bcrypt-nodejs');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


postgresDB.select('*').from('users').then(data => console.log(data))
postgresDB.select('*').from('login').then(data => console.log(data))


app.use(bodyParser.json());
app.use(cors());

//create route to confirm app is running
app.get('/',(req, res) => {
	//res.send(database.users);
	postgresDB.select('*')
	.from('users')
	.then(users => res.json(users))
	}
);

//Sign In with postgres database: POST = username, RESPONSE = user object that will be used by ReactApp SignIn and Rank
app.post('/signin', (req,res) => {
	postgresDB
	.select('email', 'hash')
	.from('login')
	.where('email', '=' ,req.body.email)
	.then(data => {
		const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
		if (isValid) {
			return postgresDB
					.select('*')
					.from('users')
					.where('email', '=' , req.body.email)
					.then(user => {
						res.json(user[0])
					})
					.catch(err => res.status(400).json('Unable to load User'))
				} else {
					res.status(400).json('Wrong Credentials, try again')
				}
	})
	.catch(err => res.status(400).json('Wrong Credentials.'))
});

//Register: POST = username, RESPONSE = 'Success\Fail'
//B push new user to postgres Database smart-brain-face-recognition
app.post('/register',(req,res) => {
	const hash = bcrypt.hashSync(req.body.password);
	postgresDB.transaction(trx => {
		trx.insert({
			hash: hash,
			email: req.body.email
		})
		.into('login')
		.returning('email')
		.then(loginEmail => {
			return trx('users')
				.returning('*')
				.insert({
					email: loginEmail[0],
					name: req.body.name,
					joined: new Date()
				})
				.then(user => {
					res.json(user[0]);
				})
			})
		.then(trx.commit)
		.catch(trx.rollback)
	})
	.catch(err => res.status(400).json('Unable to register user, try again.'))
});

//Profile/:userID: GET request to accept a user profile and repspond with home page of user (i.e ranking and image input)
//pass user details in the GET request.
//B. then validate if the ID in the GET parameter matches an id in the users varable
app.get('/profile/:id', (req,res) => {
	postgresDB.select('*').from('users').where({
		id: req.params.id
	})
	.then(user => {
		if(user.length){
			res.json(user[0]);	
		} else {
			res.status(400).json('User not in database')
		}
	})
	.catch(err => res.status(400).json('User not in database'))
});

//Image: PUT request to accept users id and update count of user pasting image for face recognition
//B. user database
app.put('/image', (req,res) => {
	postgresDB('users')
	.where('id','=',req.body.id)
	.increment('entries',1)
	.returning('entries')
	.then(entries => {
		res.json(entries[0]);
	})
	.catch(err => res.status(400).json('Unable to get entries'))
});

app.listen('3001', () => {
	console.log('Your app is running on port 3001.');
	}
);

//create database variable for users
//const database = {
//	users: [
//		{
//			id:'12',
//			name:'Krishan',
//			email:'krishan@gmail.com',
//			password:'naidoo',
//			entries:0,
//			joined: new Date()
//		},
//		{
//			id:'82',
//			name:'Naidoo',
//			email:'naidoo@gmail.com',
//			password:'krishan',
//			entries:0,
//			joined: new Date()
//		}
//	]
//}



//Sign In with database variable: POST = username, RESPONSE = user object that will be used by ReactApp SignIn and Rank
//app.post('/signin', (req,res) => {
//	if(req.body.email === database.users[0].email &&
//		req.body.password === database.users[0].password) {
//		res.json(database.users[0])
//	} else {
//		res.status(400).json('Error Logging in')
//	}
//	}
//);


//Register: POST = username, RESPONSE = 'Success\Fail'
//A push new user to database variable
//app.post('/register',(req,res) => {
//	database.users.push(
//		{
//			id: Math.floor(Math.random() * 100),
//			name: req.body.name,
//			email: req.body.email,
//			password: req.body.password,
//			entries: 0,
//			joined: new Date()
//		}
//	);
//	//now respond with the last user created in the array
//	res.json(database.users[database.users.length-1]);
//}
//);


//Profile/:userID: GET request to accept a user profile and repspond with home page of user (i.e ranking and image input)
//pass user details in the GET request.
//A. then validate if the ID in the GET parameter matches an id in the users varable
//app.get('/profile/:id', (req,res) => {
//	let userExist = false;
//	database.users.forEach(user => {
//		if(user.id === req.params.id) {
//			userExist = true;
//			return res.json(user);
//		}
//	});
//	if(!userExist) {
//		res.status(400).json('user does not exist.'); 
//	}
//});


//Image: PUT request to accept users id and update count of user pasting image for face recognition
//A. user variable
//app.put('/image', (req,res) => {
//	let userExist = false;
//	database.users.forEach(user => {
//		if(user.id === req.body.id) {
//			userExist = true;
//			user.entries++
//			return res.json(user.entries);
//		}
//	})
//	if(!userExist) {
//		res.status(400).json('user does not exist');
//	}
//});

//app.listen('3001', () => {
//	console.log('Your app is running on port 3001.');
//	}
//);