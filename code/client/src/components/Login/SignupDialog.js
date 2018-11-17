import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Done from '@material-ui/icons/Done';
import Close from '@material-ui/icons/Close';

export const SignupDialog = props => {


    return (
      
        <Dialog
          open={props.open}
          onClose={props.handleCloseSignup}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To sign up please fill in the fields below.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="FirstName"
              label="First Name"
              type="text"
              fullWidth
            />
             <TextField
              autoFocus
              margin="dense"
              id="LastName"
              label="Last Name"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="passwordConfirm"
              label="Confirm Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleCloseSignup} color="secondary">
            <Close />
              Cancel
            </Button>
            <Button onClick={props.handleCloseSignup} color="primary">
            <Done />
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>

      
    );
  
}




