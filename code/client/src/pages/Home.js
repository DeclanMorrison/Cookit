import React from "react";
import Appbar from "../components/Appbar";
import { withStyles } from "@material-ui/core/styles";
import Recipes from "../components/Recipes";
import Favorites from "../components/Favorites";
import Calendar from "../components/Calendar";
import { Typography, Divider } from "@material-ui/core";
import "typeface-fjalla-one";
import SearchBar from "../components/SearchBar";
import { Grid } from "@material-ui/core";
import API from "../utils/API";

const styles = {
  sectionHeader: {
    fontFamily: "Fjalla One"
  },
  grid: {
    overflowX: "auto"
  }
  // searchBar: {
  //   marginBottom: '100px'
  // }
};

class Home extends React.Component {
  state = {
    calendarRecipes: {
      Monday: {},
      Tuesday: {},
      Wednesday: {},
      Thursday: {},
      Friday: {},
      Saturday: {},
      Sunday: {}
    },
    recipes: [],
    favorites: [],
    searchTerm: "",
    view: "Recommended"
  };

  handleView = newview => {
    console.log(`view is changing to ${newview}`);
    if (newview === "Favorites") {
      this.getFavorites();
      this.setState({ view: newview });
    } else {
      this.setState({ view: newview });
    }
  };

  handleAddRecipeToCalendar = (recipe, day) => {
    console.log(`adding ${recipe} to calender`)
    let newDay = this.state.calendarRecipes[day];
    const newCalendarRecipes = this.state.calendarRecipes;

    newDay = recipe;
    newCalendarRecipes[day] = newDay;

    this.setState({ calendarRecipes: newCalendarRecipes });
  };

  handleUpdateSearchTerm = term => {
    this.setState({ searchTerm: term });
  };

  handleUpdateRecipes = recipes => {
    // this.setState({recipes : {}});
    this.setState({ recipes: recipes.hits });
  };

  getFavorites = recipes => {
    console.log(`getting favorites`);
    API.getFavorites().then(res => {
      let recipeList = res.data.hits;
      console.log(res);
      this.setState({ favorites: recipeList });
      console.log(`Favorites are - ${this.state.favorites}`);
    });
  };

  render() {
    const { classes } = this.props;
    let view = this.state.view;
    let viewComponent;
    if (view == "Favorites") {
      viewComponent = (
        <Favorites
          view={this.state.view}
          updateFavorites={this.getFavorites}
          favorites={this.state.favorites}
          handleAddRecipeToCalendar={this.handleAddRecipeToCalendar}
        />
      );
    } else {
      viewComponent = (
        <Recipes
          view={this.state.view}
          recipes={this.state.recipes}
          handleAddRecipeToCalendar={this.handleAddRecipeToCalendar}
        />
      );
    }
    let recipesArr =
      this.state.view === "Favorites"
        ? this.state.favorites
        : this.state.recipes;
    return (
      <React.Fragment>
        <Appbar
          handleView={this.handleView}
          getFavorites={this.getFavorites}
          calendarRecipes={this.state.calendarRecipes}
        >
          <Typography
            className={classes.sectionHeader}
            font="typeface-fjalla-one"
            variant="h3"
          >
            {" "}
            This Week
          </Typography>

          <Divider />
          <br />
          <Calendar calendarRecipes={this.state.calendarRecipes} />

          <br />

          <br />

          <Grid
            container
            spacing={8}
            justify="space-between"
            alignItems="flex-end"
          >
            <Grid item>
              <Typography
                className={classes.sectionHeader}
                font="typeface-fjalla-one"
                variant="h3"
              >
                {this.state.view === "Recommended"
                  ? ` Recipes for ${this.state.searchTerm}`
                  : ` ${this.state.view} Recipes`}
              </Typography>
            </Grid>

            <Grid item>
              <SearchBar
                handleView={this.handleView}
                handleUpdateSearchTerm={this.handleUpdateSearchTerm}
                handleUpdateRecipes={this.handleUpdateRecipes}
                className={classes.searchBar}
              />
            </Grid>
          </Grid>

          <Divider />
          <br />
          {viewComponent}
        </Appbar>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
