import React from "react";
import Appbar from "../components/Appbar";
import { withStyles } from '@material-ui/core/styles';
import Recipes from "../components/Recipes";
import Calendar from "../components/Calendar";
import { Typography, Divider } from "@material-ui/core";
import 'typeface-fjalla-one';
import { DragDropContext } from 'react-beautiful-dnd';
import recipes from '../components/recipesobj';

const styles = {
    sectionHeader: {
      fontFamily: "Fjalla One",
    },
    grid: {
      overflowX: 'auto'
    }
  };
  
class Home extends React.Component {
  constructor(props) {
    super(props);
  };

  state = {
    recipes : recipes.hits
  }

  onDragEnd = result => {
    const {destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ){ return };

    const newTaskIds = Array.from(this.state.recipes)
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <DragDropContext onDragEnd={this.onDragEnd}>
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
            <Recipes recipes={recipes}/>
          </Appbar>
        </DragDropContext>
      </React.Fragment>
    );
  }
};

export default withStyles(styles)(Home);