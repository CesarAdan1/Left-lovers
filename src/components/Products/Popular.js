import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import request from 'superagent';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class TitlebarGridList extends Component {
  constructor(props) {
    super();
    this.state = {
      data:[],
      googledata:[]
    };
  }
  componentWillMount(){
      this.mainPageData();
      this.dataGoogle();
    }

  dataGoogle = () => {
    request
      .get('http://localhost:3001/api/v1/googledata')
      .then(response => {
        this.setState({
          googledata: response.body.googledata
            
        })
        console.log(response.body.googledata)
      })
      .catch(error =>console.log(error));
  }

  mainPageData = () => {
    request
      .get('http://localhost:3001/api/v1/data')
      .then(response => {
        this.setState({
          data: response.body.data
          
        })
        console.log(response.body.data)
        console.log(response.body.data[0]._id)
      })
      .catch(error =>console.log(error));
    }
  render(){
  const { classes } = this.props;
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
          {this.state.data.map(data =>{  
            console.log(data._id)
         return(  
           <CardHeader         
             title={
               <Typography component="p">
               Nombre:{data.food}
               </Typography>
             } 
             subheader={
               <Typography>
               Tipo: {data.kind}
               </Typography>  
             }                                   
           />
          <GridListTile key={tile.img}>
            <img src={basket} alt={long} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                    <PreferandShare />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
  }
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
