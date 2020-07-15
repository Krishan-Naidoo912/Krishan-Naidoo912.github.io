let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

app.set("view engine", "ejs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//Configure Mongoose DB
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb+srv://Krishan:Naidoo@krishannaidoo.gny8h.mongodb.net/restful-blog-app");

//Configure Mongoose Model
let blogSchema = new mongoose.Schema(
	{
		title: String,
		image: String,
		body: String,
		created: {type: Date, default: Date.now}
	}
);

let Blog = new mongoose.model("Blog", blogSchema);

Blog.create(
	{
		title: "First Test Blog",
		image: "/images/Camp-Ground-A.jpg",
		body: "First Test Blog - Hooray!!"
	},
	function(err, newBlog) {
		if(err) {
			console.log("Error adding Blog", err);
		} else {
			console.log("NEWLEY CREATED BLOG: ");
			console.log(newBlog);
		}
	}
);

//Restful Routes

app.get("/", function(req, res) {
	res.redirect("/blogs");
});

//Restful Route 1: Index
app.get("/blogs", function(req, res) {
	Blog.find({}, function(err, allBlogs) {
		if(err) {
			console.log("Cannot Retrieve Blogs from Mongoose DB" + err);
		} else {
			res.render("index", {allBlogs: allBlogs});
		}
	});
});

//Restful Route 2: New - GET
app.get("/blogs/new", function(req, res) {
	res.render("new");
});

//Restful Route 3: Create - POST
app.post("/blogs", function(req, res) {
	//fetch blog title + image + body from new blog form and save to req.body.blog
	//this is possible due to the blog[title] + blog[image] + blog[body] attributes in the new blog form
	Blog.create(req.body.blog, function(err, newBlog) {
		if(err) {
			console.log("Cannot add new blog to Blog Posts" + err);
		} else {
			console.log("New Blog Added!");
			res.redirect("/blogs");
		}
	});
});

//Restful Route 4: Show - GET
app.get("/blogs/:id", function(req, res) {
	Blog.findById(req.params.id, function(err, foundBlog) {
		if(err) {
			console.log("Did Not Find Blog with id " + req.params.id);
		} else {
			res.render("show", {blog: foundBlog});
		}
	}
	);
}
);
			
//Restful Route 5: Edit - GET
//Restful Route 6: Update - PUT
//Restful Route 7: Destroy - DELETE

app.listen(3001, function() {
	console.log("Blog AppServer is running on port 3001")
});