//Where we make all our calls for recipe searches and such - izaak
// Grabbing our models
var db = require("../../models");
const path = require("path");
const router = require("express").Router();
const axios = require("axios");
const controller = require("../../controllers/controller.js");
var passport = require("../../config/passport");

// module.exports = function(app) {

  router.get("/testcontroller", controller.login);
  router.get("/testsignup", controller.signup);

  // // signup routing
  router.post("/signup", controller.signup)
 
  // // login section
  router.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/home",
      failureRedirect: "/login"
    })
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
  );

   // Route for getting some data about our user to be used client side
   router.get("/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

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
module.exports = router
