//Javascripts 03 for Node.js Lessons.
//by Krishan Naidoo.
//This is the Server scripts file. Added to package.json "start" property so that any changes are automatically refreshed in the node console.




//First Server Testing
//Response with html (h1 tag)
//get node-internal http module to create server
/*const http = require('http');

const server = http.createServer((request,response) => {
	console.log('Request Headers', request.headers);
	console.log('Request Method', request.method);
	console.log('Request Url', request.url);
	response.setHeader('Content-Type', 'text/html');
	response.end('<h1>I hear you!. Thanks for the request</h1>');
	}
)

//now listen to server on port 3000.
//to test, go to http://localhost:3000, now when you go to node console, you'll see the console.log
//what this means is that node is listening to connecions (i.e's refreshes) on local host port 3000 instead of refreshes on script file
server.listen(3000);
*/




//Second Server Testing
//Response with Jason using ajax request
//get node-internal http module to create server
/*const http = require('http');
//create uesr object to pass to jason request
const user = {
	name: "Krishan1",
	suname: "Naidoo"
};

const server = http.createServer((request,response) => {
	console.log('Request Headers', request.headers);
	console.log('Request Method', request.method);
	console.log('Request Url', request.url);
	response.setHeader('Content-Type', 'application.json');
	//now change user object to JSON string so that you can submit over internet request
	response.end(JSON.stringify(user));
	}
)

//now listen to server on port 3000.
//to test, go to http://localhost:3000, now when you go to node console, you'll see the console.log
//what this means is that node is listening to connecions (i.e's refreshes) on local host port 3000 instead of refreshes on script file
server.listen(3000);
*/




//Now create a node Express server
//begin by running npm install express
//then you have access to create the express node server

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//include express middle ware to run first before the next apps.
//receives request ahead of all the below apps, runs some functions and then moves to the next apps.
/*app.use((req,res,next) => {
	console.log('This is express server middle ware message.');
	next();
	}
);
*/

//add middleware bodyParser to console.log request.body when using app.post when posting html form tags
app.use(bodyParser.urlencoded({extended: false}));

//add middleware bodyParser to console.log body when using app.post when posting raw json
app.use(bodyParser.json());

app.get('/',(req, res) => {
	//create user object to pass to JSON
	const user = {
		name: 'Krishan',
		surname: 'Naidoo'
	};
	res.send(user);
	//res.send("<h1>Hello Krishan!</h1>");
	}
);

app.get('/contact',(req, res) => {
	//create user object to pass to JSON
	const user = {
		name: 'Krishan',
		surname: 'Naidoo',
		contact: '287',
	};
	res.send(user);
	//res.send("<h1>Hello Krishan!</h1>");
	}
);


//now user Postman app to test the post method
//first npm install body-parser middle ware to access request.body
app.post('/contactPost',(req, res) => {
	console.log(req.body)
	//create user object to pass to JSON
	const user = {
		name: 'Krishan',
		surname: 'Naidoo',
		contact: '287',
	};
	res.send(user);
	//res.send("<h1>Hello Krishan!</h1>");
	}
);


app.listen(3000);

