const express = require("express");

const sequelize = require("sequelize");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);
var list = ["item1", "item2", "item3"];
app.get('/api/test', function(req,res) {
 res.send(list);
 console.log('Sent list of items');
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
