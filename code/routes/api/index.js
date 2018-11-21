//Where we make all our calls for recipe searches and such - izaak
// Grabbing our models
var db = require("../../models");
const path = require("path");
const router = require("express").Router();
const axios = require("axios");
const controller = require("../../controllers/controller.js");
var passport = require("../../config/passport");

// module.exports = function(app) {

router.post("/signup", controller.signup);

// // login section
router.post("/login", controller.login);

// Route for getting some data about our user to be used client side
router.get("/user_data", controller.getUserData);

// app.get("/api/recipes", (req, res) => {
//   console.log("\nRetreiving all recipes...\n");
//   db.Recipes.findAll({}).then(dbRecipes => {
//     res.send("it worked finally");
//   });
// });

// app.get("/recipe/id", function(req, res) {
//   console.log("\nRetreiving recipe...\n");
//   db.Favorites.findOne({
//     where: { recipeID: req.recipeID }
//   }).then(dbUser => {
//     console.log(dbUser);
//     res.redirect("/");
//   });
// });

// app.get("/search", function(req, res) {
//   axios
//     .get(
//       "https://api.edamam.com/search?q=chicken&app_id=f457772e&app_key=47c5a1d77ba0337a17e3f917071f5c6e"
//     )
//     .then(results => {
//       console.log(results.data.hits[1]);
//     })
//     .catch(error => {
//       console.log(`Error in query: ${error}`);
//     });
// });
// };
module.exports = router;
