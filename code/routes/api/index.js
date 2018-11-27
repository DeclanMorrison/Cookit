//Where we make all our calls for recipe searches and such - izaak
// Grabbing our models
const router = require("express").Router();
const controller = require("../../controllers/controller.js");
var passport = require("../../config/passport");
var isAuthenticated = require("../../config/middleware/isAuthenticated");

// module.exports = app => {
// // login section
router.post("/signup", controller.signup);

router.post("/login", function(req, res, next) {
    console.log("signing in")
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("no user found");
      return res.send({
        status: "unsuccessful",
        reason: "invalid credentials"
      });
    }
    req.logIn(user, function(err) {
      console.log(user);
      if (err) {
        return next(err);
      }
      return res.json({
        data: req.User.dataValues
      });
      // return res.send({
      //   status: "success",
      //   reason: "sign in",
      //   user: user.username
      // user:req.data.username
    });
  });
});

// //checking if signed in
router.get("/checkauth", isAuthenticated, function(req, res) {
  console.log("auth here");
  return res.status(200).json({
    status: "Login successful!"
  });
});

// Route for logging user out
router.get("/logout", function(req, res) {
  console.log("signing out");
  req.logout();
  res.redirect("/");
});

// recipe routes
router.get("/user_data", controller.getUserData);

router.get("/favorites", controller.getFavoriteRecipes);

router.get("/findOneFavorite", controller.findOneFavorite);

router.get("/findRecipes", controller.findRecipes);

module.exports = router;
