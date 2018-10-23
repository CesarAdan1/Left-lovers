import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import basket from '../../images/albondigas.jpeg';
import dish from '../../images/dish.jpeg';
import orange from '../../images/orange.jpeg';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

  const tileData = [
    {
      img: {basket},
      title: 'Image',
      author: 'author',
    },
    {
      img: {orange},
      title: 'Image',
      author: 'author',
    },
    {
        img: {dish},
        title: 'Image',
        author: 'author',
      },
  ];
 
class SingleLineGridList extends Component {
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                
                <GridList className={classes.gridList} cols={2.5}>
                    <Card >Lo más vendido</Card>
                    {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                        title={tile.title}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        actionIcon={
                            <IconButton>
                            <StarBorderIcon className={classes.title} />
                            </IconButton>
                        }
                        />
                    </GridListTile>
                    ))}
                </GridList>
                </div>
        )
    }
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);