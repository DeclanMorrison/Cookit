import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import recipes from './recipesobj';


const styles = theme => ({
  root: {
    // width: `${window.innerWidth - 300}px`,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class TitlebarGridList extends React.Component {
  constructor(props){
    super(props);
  };

  state = {
    cols : ""
  }

  handleWindowResize = () => {
    this.setState({cols: Math.floor(window.innerWidth/282)});
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
    return (
      <div className={classes.root}>
        <GridList cellHeight={130} cols={this.state.cols} className={classes.gridList}>
          {recipes.hits.map(hit => (
            <GridListTile key={hit.recipe.label}>
              <img src={hit.recipe.image} alt={hit.recipe.label} />
              <GridListTileBar
                title={hit.recipe.label}
                // subtitle={<span>by: {tile.author}</span>}
                // actionIcon={
                //   <IconButton className={classes.icon}>
                //     <InfoIcon /s>
                //   </IconButton>
                // }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  };
};

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);