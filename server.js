//Set up the express
var express = require("express");

//Sets up th Express App
var app = express();

//Default port address for Heroku
var PORT = process.env.PORT || 8080;

// Automatically generates routes for every file in the public folder
app.use(express.static("public"));

//Requiring our models for syncing
var db = require("./models");

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes - require (app) after the route
// ============================================================= 
// require("./controllers/htmlRoutes.js")(app);
require("./controllers/apiRoutes.js")(app);

app.get('/*', (req, res) => {
  res.redirect('/burgers');
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
