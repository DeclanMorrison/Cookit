import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CalendarDayLg from "./CalendarDayLg";

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflowWrap: 'auto'
    // whitespace: 'nowrap'
    // overflow: 'hidden'
  },
  demo: {
    height: 250,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  
});

class InteractiveGrid extends React.Component {
  state = {
    direction: 'row',
    justify: 'space-between',
    alignItems: 'center',
  };

  render() {
    const { classes } = this.props;
    const { alignItems, direction, justify } = this.state;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={16}
            className={classes.demo}
            alignItems={alignItems}
            direction={direction}
            justify={justify}
          >
            {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",].map(value => (
              <Grid key={value} item>
                <CalendarDayLg size="L">
                  {value}
                </CalendarDayLg>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

InteractiveGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveGrid);