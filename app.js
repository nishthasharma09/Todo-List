//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const items = ["Wake-up"];
const item = "";
const workItems = [];

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

	const day = date();
	res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){

	const item = req.body.newItem;

	if(req.body.list === "Work"){
		workItems.push(item);
		res.redirect("/work");
	}
	else{
	items.push(item);
	res.redirect("/");
	}
	
});

app.get("/work", function(req,res){
	res.render("list",{listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req,res) {
	res.render("about",{listTitle: "About us"});
});

app.post("/work", function(req,res){
	const item = req.body.newItem;
	workItems.push(item);
	res.redirect("/work");
});

app.listen(3000, function(req, res){
	console.log("Server running at port 3000");
});
