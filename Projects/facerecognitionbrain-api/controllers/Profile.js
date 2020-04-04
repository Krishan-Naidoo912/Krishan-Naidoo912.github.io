//Body of Profile function for Server.js

const handleProfileGet = (req, res, postgresDB) => {
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
}

module.exports = {
	handleProfileGet: handleProfileGet
}