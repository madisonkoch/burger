var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var handlebars = require("express-handlebars");

var routes = require("./controllers/burger_controller.js");

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

//Start Server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
