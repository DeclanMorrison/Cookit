import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CalendarDay from './CalendarDay';
import { getDay } from 'date-fns';

// import tileData from './tileData';

const styles = theme => ({
  
  gridList: {
    width: `100%`,
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
});

class SingleLineGridList extends React.Component {
  constructor(props) {
    super(props);
  };
  
  state = {
    width: "",
  };

  handleWindowResize = () => {
    this.setState({width: window.innerWidth - 125});
  };

  componentWillMount = () => {
    this.handleWindowResize();
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.handleWindowResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWindowResize);
  };

  render () {
    const { classes } = this.props;
    const rootStyle = {
      width: `${this.state.width}px`,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      // backgroundColor: theme.palette.background.paper,
    };

    return (
    <div style={rootStyle}>
      <GridList className={classes.gridList} cols={Math.floor((window.innerWidth)/200)}>
        {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",].map(tile => (
          <GridListTile key={tile}>/>
            <CalendarDay size="S">{tile}</CalendarDay>
          </GridListTile>
        ))}
      </GridList>
    </div>
    )
  };
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);