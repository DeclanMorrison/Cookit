import React from "react";
import Appbar from "../components/Appbar";
import { withStyles } from '@material-ui/core/styles';
import Recipes from "../components/Recipes";
import Calendar from "../components/Calendar";
import { Typography, Divider } from "@material-ui/core";
import 'typeface-fjalla-one';

const styles = {
    sectionHeader: {
      fontFamily: "Fjalla One",
    },
    grid: {
      overflowX: 'auto'
    }
  };
  
  const Home = (props) => {
    const { classes } = props;
    return (
      <React.Fragment>
        <Appbar>
          <Typography className={classes.sectionHeader} font="typeface-fjalla-one" variant="h3"> This Week</Typography>
          
          <Divider/>
          <br/>
          <Calendar/>

          <br/>
          
          <br/>

          <Typography className={classes.sectionHeader} font="typeface-fjalla-one" variant="h3"> Recommended</Typography>
          
          <Divider/>
          <br/>
          <Recipes/>
        </Appbar>
      </React.Fragment>
    );
  };
  
  export default withStyles(styles)(Home);