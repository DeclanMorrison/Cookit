import React from "react";
import Appbar from "./components/Appbar";
import { withStyles } from '@material-ui/core/styles';
import Grid from "./components/Grid";
import GridList from "./components/GridList";
import CalendarDay from "./components/CalendarDay";
import { Typography } from "@material-ui/core";
import 'typeface-fjalla-one';


const styles = {
  sectionHeader: {
    fontFamily: "Fjalla One",
  },
  grid: {
    overflowX: 'auto'
  }
};

const App = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Appbar>
        <Typography className={classes.sectionHeader} font="typeface-fjalla-one" variant="h3">| This Week</Typography>
        {/* <Grid className={classes.grid}/> */}
        <GridList></GridList>
      </Appbar>
    </React.Fragment>
  );
};

export default withStyles(styles)(App);
