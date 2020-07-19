let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let methodOverride = require("method-override"); //Need this to override POST request to PUT request
let expressSanitzier = require("express-sanitizer") //Need this to prevent user from pasting js scrips in html body when editing a blog

app.set("view engine", "ejs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitzier());
app.use(methodOverride("_method"));


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

// Blog.create(
// 	{
// 		title: "First Test Blog",
// 		image: "/images/Camp-Ground-A.jpg",
// 		body: "First Test Blog - Hooray!!"
// 	},
// 	function(err, newBlog) {
// 		if(err) {
// 			console.log("Error adding Blog", err);
// 		} else {
// 			console.log("NEWLEY CREATED BLOG: ");
// 			console.log(newBlog);
// 		}
// 	}
// );

// Blog.create(
// 		{
// 			title: "Second Test Blog",
// 			image: "/images/Camp-Ground-B.jpg",
// 			body: "Second Test Blog - Hooray!!"
// 		}
// 	)
// 	.then(newBlog => {
// 		console.log("NEWLEY CREATED BLOG: ");
// 		console.log(newBlog);
// 		}
// 	)
// 	.catch(err => console.log(err));

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
	//first Sanitize the blog body so that it does not contain js script from user
	console.log(req.body);
	req.body.blog.body = req.sanitize(req.body.blog.body);
	console.log("============");
	console.log(req.body);
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
			res.redirect("/blogs");
		} else {
			res.render("show", {blog: foundBlog});
		}
	}
	);
}
);
			
//Restful Route 5: Edit - GET
app.get("/blogs/:id/edit", function(req, res) {
	Blog.findById(req.params.id, function(err, foundBlog) {
		if(err) {
			console.log("Did Not Find Blog with id " + req.params.id);
			res.redirect("/blogs");
		} else {
			res.render("edit", {blog: foundBlog});			
		}	
	});	
});

//Restful Route 6: Update - PUT
app.put("/blogs/:id", function(req, res) {
	//first Sanitize the blog body so that it does not contain js script from user
	console.log(req.body);
	req.body.blog.body = req.sanitize(req.body.blog.body);
	console.log("============");
	console.log(req.body);
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
		if(err) {
			console.log("Did Not Find Blog with id " + req.params.id);
			res.redirect("/blogs");
		} else {
			res.redirect("/blogs/" + req.params.id);	
		}
	});
});

//Restful Route 7: Destroy - DELETE
app.delete("/blogs/:id", function(req, res) {
	Blog.findByIdAndRemove(req.params.id)
	.then(foundBlog => {
		console.log("Blog Deleted")
		res.redirect("/blogs")
		}
	)
	.catch(err => res.redirect("/blogs"));
});

app.listen(3001, function() {
	console.log("Blog AppServer is running on port 3001")
});