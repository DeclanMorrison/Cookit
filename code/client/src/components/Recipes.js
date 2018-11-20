import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import Container from './Container';

import { Droppable, Draggable } from 'react-beautiful-dnd';

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
      <Droppable droppableId="Recipes">
        {provided => (
          <div className={classes.root} {...provided.droppableProps} ref={provided.innerRef}>
            <GridList cellHeight={130} cols={this.state.cols} className={classes.gridList}>
              {this.props.recipes.hits.map((hit, index) => (
                <Container hit={hit} index={index}></Container>
              ))}
              {provided.placeholder};
            </GridList>
          </div>
        )}
      </Droppable>
    );
  };
};

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);