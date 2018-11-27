import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import axios from 'axios';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
    height: '10px',
    marginTop: '20px'
  },
});

class SearchBar extends React.Component {
  
  constructor(props){
    super(props);
  };

  state = {
    searchTerm: 'Chicken Parmesean',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSearchClick = () => {
    axios.get("https://api.edamam.com/search", {
      params: {
        q: this.state.searchTerm,
        app_id: "f457772e",
        app_key: "47c5a1d77ba0337a17e3f917071f5c6e"
      }
    }).then(response => {
      this.props.handleUpdateRecipes(response.data);
      console.log(response.data);
    });
  };

  render() {
    const { classes } = this.props;
    return(
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Search recipes here"
          className={classes.textField}
          value={this.state.searchTerm}
          onChange={this.handleChange('searchTerm')}
          margin="normal"
        />
        <Button onClick={this.handleSearchClick} className={classes.button}>Search</Button>
      </form>
    );
  };
};

export default withStyles(styles)(SearchBar);