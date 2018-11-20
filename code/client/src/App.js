import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Router>
      <div>
        <Switch>
          {this.state.isLoggedIn ? 
          (<React.Fragment><Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} /></React.Fragment>) :
          (<Route path="*" component={Login} />)}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
    );
  }
};

export default withStyles(styles)(App);