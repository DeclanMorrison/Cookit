const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

router.get("/", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/home");
  }
  res.sendFile(path.join(__dirname, "../client/public"));
});

router.get("/login", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    console.log(`${req.user} is signed in`)
    res.redirect("/home");
  }
  console.log(`User is not signed in'`)
  res.sendFile(path.join(__dirname, "./public/login.html"));
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/isAuthenticated", isAuthenticated, function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});


module.exports = router;
