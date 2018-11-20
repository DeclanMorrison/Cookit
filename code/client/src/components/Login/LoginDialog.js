import React from "react";
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

class LoginDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    email: "",
    pass: ""
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSignInAttempt = () => {
    let email = this.state.email;
    let password = this.state.pass;
    API.login(email, password).then((result, err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`success! result: ${result}`);
        this.props.handleCloseLogin();
      }
    });
    
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleCloseLogin}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Log in</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Log in please fill in the fields below.
          </DialogContentText>

          <TextField
            value={this.state.email}
            onChange={this.handleOnChange}
            name="email"
            placeholder="Email"
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="string"
            fullWidth
          />
          <TextField
            value={this.state.pass}
            onChange={this.handleOnChange}
            name="pass"
            placeholder="Password"
            margin="dense"
            id="password"
            label="Password"
            type="Password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleCloseLogin} color="secondary">
            <Close />
            Cancel
          </Button>
          <Button onClick={this.handleSignInAttempt} color="primary">
            <Done />
            Log In
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default LoginDialog;
