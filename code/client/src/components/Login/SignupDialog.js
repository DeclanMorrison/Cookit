import React from "react";
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Done from "@material-ui/icons/Done";
import Close from "@material-ui/icons/Close";
import API from "../../utils/API";

class SignupDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleOnChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleSignUpAttempt = () => {
    let passwordMatch = true;
    let user = {};
    user.firstName = this.state.firstName;
    user.lastName = this.state.lastName;
    user.email = this.state.email;
    user.password =
      this.state.password === this.state.confirmPassword
        ? this.state.password
        : (passwordMatch = false);

    console.log(user);

    if (passwordMatch) {
      API.signUp(user).then((result, err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`success! result: ${result}`);
          this.props.handleCloseSignup();
          <Link to="/home">About</Link>
        }
      });
    }
    // this.props.handleCloseSignUp();
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleCloseSignup}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To sign up please fill in the fields below.
          </DialogContentText>
          <TextField
            value={this.state.firstName}
            onChange={this.handleOnChange}
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="string"
            fullWidth
          />
          <TextField
            value={this.state.lastName}
            onChange={this.handleOnChange}
            // autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            type="string"
            fullWidth
          />
          <TextField
            value={this.state.email}
            onChange={this.handleOnChange}
            // autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="string"
            fullWidth
          />
          <TextField
            value={this.state.password}
            onChange={this.handleOnChange}
            // autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="string"
            fullWidth
          />
          <TextField
            value={this.state.confirmpass}
            onChange={this.handleOnChange}
            // autoFocus
            margin="dense"
            id="confirmPassword"
            label="Confirm Password"
            type="string"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleCloseSignup} color="secondary">
            <Close />
            Cancel
          </Button>
          <Button onClick={this.handleSignUpAttempt} color="primary">
            <Done />
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default SignupDialog;
