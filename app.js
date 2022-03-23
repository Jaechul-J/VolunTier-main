const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const https = require("https");

const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/organization", function(req, res) {
  res.render("organization");
});

app.get("/profile", function(req, res) {
  res.render("profile");
});

app.get("/volunteer", function(req, res) {
  res.render("volunteer");
});

app.get("/map", function(req, res) {
  res.render("map");
});

app.get("/signup", function(req, res) {
  res.render("signup");
});

app.get("/login", function(req, res) {
  res.render("login");
});

app.get("/confirmation", function(req, res) {
  res.render("confirmation");
});

app.get("/ranking", function(req, res) {
  res.render("ranking");
});

app.get("/calendar", function(req, res) {
  res.render("calendar");
});

app.post("/calendar", function(req, res) {
  res.render("calendar");
});




app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});
