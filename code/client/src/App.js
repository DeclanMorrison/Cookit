//All page-level components will be arranged here, and switched using the React Router.

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { 
  AppBar, 
  Button,
  Toolbar,
  Typography } from "@material-ui/core";

const App = () => (
  <div>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Photos
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default App;
