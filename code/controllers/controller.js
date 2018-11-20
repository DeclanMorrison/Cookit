const db = require('../models')
var exports = module.exports = {}

exports.login = function(req,res) {
    console.log("testcontroller hit")
    res.render("/")
}
exports.signup = function(req,res) {
    console.log("signup route hit")
    let newuser = req.body
    db.User.create({
      firstName: newuser.firstName,
      lastName: newuser.lastName,
      email: newuser.email,
      password: newuser.password
    })
      .then(function() {
        res.redirect("/home")
        // res.redirect("/home");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
}

exports.findRecipes = function(res,req) {

}