let express = require("express");
let app = express();
let rp = require("request-promise");

app.get("/", function(req, res) {
	res.render("movieApiSearchForm.ejs");
})

app.get("/movieApiResults", function(req, res) {
	let movieSearch = req.query.movieName;
	rp("http://www.omdbapi.com/?s="+ movieSearch + "&apikey=b6b42e67")
	.then(response => {
		let searchResults = JSON.parse(response);
		res.render("movieApiResults.ejs", {searchResults: searchResults});
	})
	.catch(err => console.log("Error:" + err))
});

app.listen(3001, function() {
	console.log("Movie API Appserver is running on port 3001");
});