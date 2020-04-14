//Body of Root function for Server.js

const handleRoot = (req, res , postgresDB) => {
	postgresDB
	.select('*')
	.from('users')
	.then(users => res.json(users))
	}

module.exports = {
	handleRoot: handleRoot
}