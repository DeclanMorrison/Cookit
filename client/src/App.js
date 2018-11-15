import React from "react";
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
    <Login />
  );
};

export default withStyles(styles)(App);
