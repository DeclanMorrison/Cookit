import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import defaultRecipes from './recipesobj';
import StarIcon from '@material-ui/icons/StarRateRounded'
import OpenIcon from '@material-ui/icons/ExitToAppRounded';
import { Zoom, Tooltip } from '@material-ui/core';
import Menu from '../components/Menu';

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

  handleOpenInSite = (url) => {
    window.open(url)
  };

  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={130} cols={this.state.cols} className={classes.gridList}>
          {(this.props.recipes.length === 0 ? defaultRecipes.hits : this.props.recipes).map((hit, index) => (
            
            <GridListTile key={index}>
              <img src={hit.recipe.image} alt={hit.recipe.label} />
              <GridListTileBar
                title={hit.recipe.label}
                // subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                  <Tooltip TransitionComponent={Zoom} title="Add to Favorites">
                    <StarIcon/>
                    {/* Add functionality to add to favorites */}
                  </Tooltip>
                  <Tooltip TransitionComponent={Zoom} title="View on Site">
                    <OpenIcon onClick={() => this.handleOpenInSite(hit.recipe.url)}/>
                  </Tooltip>
                    <Menu recipe={hit.recipe} handleAddRecipeToCalendar={this.props.handleAddRecipeToCalendar}/> 
                    {/* Add functionality to add to calendar */}
                  </IconButton>
                }
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