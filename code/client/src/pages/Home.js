import React from "react";
import Appbar from "../components/Appbar";
import { withStyles } from '@material-ui/core/styles';
import Recipes from "../components/Recipes";
import Calendar from "../components/Calendar";
import { Typography, Divider } from "@material-ui/core";
import 'typeface-fjalla-one';
import SearchBar from '../components/SearchBar';
import {Grid} from '@material-ui/core'
import axios from 'axios';
const styles = {
    sectionHeader: {
      fontFamily: "Fjalla One",
    },
    grid: {
      overflowX: 'auto'
    },
    // searchBar: {
    //   marginBottom: '100px'
    // }
  };
  
  class Home extends React.Component {
    constructor(props){
      super(props);
    };

    state ={ 
      calendarRecipes: {
        "Monday" : {},
        "Tuesday" : {},
        "Wednesday" : {},
        "Thursday" : {},
        "Friday" : {},
        "Saturday" : {},
        "Sunday" : {},
      },
      recipes : {}
    };

    handleUpdateRecipes = (recipes) => {
      this.setState({recipes : {}});
      this.setState({recipes : recipes});
    };

    handleUpdateCalendarRecipes = (day, recipe) => {
      const calendarRecipesState = this.state.calendarRecipes;
      calendarRecipesState[day] = recipe;
      this.setState({calendarRecipes: calendarRecipesState})
    }

    // componentDidMount = () => {
    //   axios.get("https://api.edamam.com/search", {
    //     params: {
    //       q: "lobster",
    //       app_id: "f457772e",
    //       app_key: "47c5a1d77ba0337a17e3f917071f5c6e"
    //     }
    //   }).then(response => {
    //     this.setState({recipes : response});
    //   });
    // };

    render() {
      const { classes } = this.props;
      return (
        <React.Fragment>
          <Appbar>
            <Typography className={classes.sectionHeader} font="typeface-fjalla-one" variant="h3"> This Week</Typography>
            
            <Divider/>
            <br/>
            <Calendar/>

            <br/>
            
            <br/>
            
            <Grid container spacing={8} justify="space-between" alignItems="flex-end">
              <Grid item>
                <Typography className={classes.sectionHeader} font="typeface-fjalla-one" variant="h3"> Recommended</Typography>
              </Grid>
              
              <Grid item>
                <SearchBar handleUpdateRecipes={this.handleUpdateRecipes} className={classes.searchBar}></SearchBar>
              </Grid>
            </Grid>
            
            
            <Divider/>
            <br/>
            <Recipes recipes={this.state.recipes}/>
          </Appbar>
        </React.Fragment>
      );
    };

  };
  
  export default withStyles(styles)(Home);