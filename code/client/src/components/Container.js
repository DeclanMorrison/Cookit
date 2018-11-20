import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import { withStyles } from '@material-ui/core/styles';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
  tile : {
    height: "130px"
  }
});

class Container extends React.Component {
  constructor(props) {
    super(props);
  };

  

  render() {
    const { classes } = this.props;
    return (
      <Draggable draggableId={this.props.hit.recipe.label} index={this.props.index}>
        {(provided) => (
          <div 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            
          >
            <GridListTile className={classes.tile}
              key={this.props.hit.recipe.label}
            >
              <img src={this.props.hit.recipe.image} alt={this.props.hit.recipe.label} />
              <GridListTileBar
                title={this.props.hit.recipe.label}
                // subtitle={<span>by: {tile.author}</span>}
                // actionIcon={
                //   <IconButton className={classes.icon}>
                //     <InfoIcon /s>
                //   </IconButton>
                // }
              />
            </GridListTile>
          </div>
        )}
      </Draggable>
    );
  };
};

export default withStyles(styles)(Container);