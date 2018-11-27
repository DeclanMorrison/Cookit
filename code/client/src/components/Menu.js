import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import DropIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import DropIcon from '@material-ui/icons/DateRangeRounded';
import {Tooltip, Zoom } from '@material-ui/core';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (event) => {
    console.log(event);
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <React.Fragment>
        {/* <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        > */}
        {/* </Button> */}
        <Tooltip TransitionComponent={Zoom} title="Add to Calendar">
          <DropIcon onClick={this.handleClick}></DropIcon>
        </Tooltip>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Monday</MenuItem>
          <MenuItem onClick={this.handleClose}>Tuesday</MenuItem>
          <MenuItem onClick={this.handleClose}>Wednesday</MenuItem>
          <MenuItem onClick={this.handleClose}>Thursday</MenuItem>
          <MenuItem onClick={this.handleClose}>Friday</MenuItem>
          <MenuItem onClick={this.handleClose}>Saturday</MenuItem>
          <MenuItem onClick={this.handleClose}>Sunday</MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
}

export default SimpleMenu;