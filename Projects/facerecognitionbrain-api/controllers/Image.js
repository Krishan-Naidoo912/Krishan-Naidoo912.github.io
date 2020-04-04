//Body of Image function for Server.js
//import Clarifai api so that the server receives a request with an image url from the front end
//and submits to clarifa api using Krishan912 api key

const Clarifai = require('clarifai')

const app = new Clarifai.App(
  {
    apiKey:'8152c775f0214f55a31d6e06a10f1762'
  }
);

const handleClarifaiApiCall = (req, res) => {
	//pass Krishan Naidoo clarifai key
    app.models.predict(
      //use Clairifai Face detect model
      Clarifai.FACE_DETECT_MODEL,
      //now send the user entered image url that is saved in state 'input' to clarifai API to detect face
      req.body.userInputImage)
    //now respond to the server with the Clarifai API bounding box of the image
    .then(data => {
    	res.json(data)
    })
    .catch(err => res.status(400).json('Unable to work with Clarifai API'))
}

const handleImage = (req, res, postgresDB) => {
	postgresDB('users')
	.where('id','=',req.body.id)
	.increment('entries',1)
	.returning('entries')
	.then(entries => {
		res.json(entries[0]);
	})
	.catch(err => res.status(400).json('Unable to get entries'))
}

module.exports = {
	handleImage: handleImage,
	handleClarifaiApiCall: handleClarifaiApiCall
}