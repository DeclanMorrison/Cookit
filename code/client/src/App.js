import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appbar from "./components/Appbar";
import { withStyles } from '@material-ui/core/styles';
import Grid from "./components/Grid";
import { Typography, Divider } from "@material-ui/core";
import 'typeface-fjalla-one';
import Home from "./pages/Home";
import Login from "./pages/Login";


const styles = {
  sectionHeader: {
    fontFamily: "Fjalla One",
  },
  grid: {
    overflowX: 'auto'
  }
};

const App = (props) => {
  const { classes } = props;
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
  );
};

export default withStyles(styles)(App);