//Array of Movie Objects

let movies = [
	{
		title: "Marvel Avengers",
		rating: "5 stars",
		hasWatched: true,
	},
	{
		title: "Khabi Kushi Khabi Kum",
		rating: "5 stars",
		hasWatched: true,
	},
	{
		title: "Transformers",
		rating: "4.5 stars",
		hasWatched: true,
	},
	{
		title: "Raees",
		rating: "3.5 stars",
		hasWatched: false,
	},
	{
		title: "Wonder Women",
		rating: "5 stars",
		hasWatched: true
	}
]

//Print Summary

movies.forEach(movie => {
	if(movie.hasWatched == true) {
		console.log(`You have watched "${movie.title}" - ${movie.rating}`);
	} else {
		console.log(`You have not seen "${movie.title}" - ${movie.rating}`);
	}
});