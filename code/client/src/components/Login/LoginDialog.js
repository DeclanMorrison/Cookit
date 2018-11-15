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

export const LoginDialog = props => {

    return (
      
        <Dialog
          open={props.open}
          onClose={props.handleCloseLogin}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Log in</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To Log in please fill in the fields below.
            </DialogContentText>
           
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
           
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleCloseLogin} color="secondary">
            <Close />
              Cancel
            </Button>
            <Button onClick={props.handleCloseLogin} color="primary">
            <Done />
              Log In
            </Button>
          </DialogActions>
        </Dialog>

      
    );
  
}