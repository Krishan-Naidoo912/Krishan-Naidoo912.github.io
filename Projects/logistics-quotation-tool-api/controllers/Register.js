//Body of Register function for Server.js

const handleRegister = (req, res, postgresDB, bcrypt) => {
	//check if user submited blank fields when registereing
	if(!req.body.email || !req.body.name || !req.body.password) {
		return res.status(400).json("Please provide email name and password.")
	}
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
}

module.exports = {
	handleRegister: handleRegister
}