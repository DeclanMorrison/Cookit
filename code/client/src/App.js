import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Routes from "./Routes";
import { withStyles } from '@material-ui/core/styles';
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

class App extends React.Component {
  constructor(props){
    super(props);
  };

  state = {
    isLoggedIn : false
  };

  updateLoginState = () => {
    this.setState({isLoggedIn : !this.state.isLoggedIn});
  };

  render () {
    const { classes } = this.props;
    return (
      <div className="container">
        <Link to="/"></Link>
        <Routes />
      </div>
    );
  }
};

export default withStyles(styles)(App);
