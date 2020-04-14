//Body of SignIn function for Server.js

const handleSignIn = (req, res, postgresDB, bcrypt) => {
	//check if user submited blank fields when signing in.
	if(!req.body.email || !req.body.password) {
		return res.status(400).json("Please provide email and password.")
	}
	
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
}

module.exports = {
	handleSignIn: handleSignIn
}
