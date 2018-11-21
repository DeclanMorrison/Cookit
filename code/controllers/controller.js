const db = require("../models");
var passport = require("../config/passport");
var exports = (module.exports = {});

exports.login = 
    passport.authenticate("local", {
      successRedirect: "/login",
      failureRedirect: "/login"
    })

exports.signup = function(req, res) {
  console.log("signup route hit");
  let newuser = req.body;
  // check if email is already in database, error out if true
  db.User.findAll({
    where: {
      email: newuser.email
    }
  }).then(function(result) {
    if (result != "") {
      console.log(`\n email already taken! \n`);
      res.send({
        status:'failed',
        reason:"email already taken"
      })
    }
    if (result == ""){
      db.User.create({
        firstName: newuser.firstName,
        lastName: newuser.lastName,
        email: newuser.email,
        password: newuser.password
      })
        .then(function() {
          res.send({
            status:'success',
            reason:"user signed up"
          });
          // res.redirect("/home");
        })
        .catch(function(err) {
          console.log(err);
          res.json(err);
          // res.status(422).json(err.errors[0].message);
        });
    }
  });
};

exports.findRecipes = function(res, req) {};

exports.getUserData = function(req,res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }
}
