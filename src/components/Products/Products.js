import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import basket from '../../images/basket.jpeg'
import PreferandShare from './PreferandShare';
import request from 'superagent'
import './Products.css'

const styles = theme => ({
  card: {
    maxWidth:250,   
    marginLeft: theme.spacing.unit*1 ,
    marginRight: theme.spacing.unit*1,
    marginBottom: theme.spacing.unit * 1,
  },
  media: {
    height: 0,
    paddingTop: '80%', 
    zIndex:-1
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  effect:{
    zIndex:1
  }
});

class Products extends Component {   
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
  render() {
    const { classes } = this.props;    
    return (
      <div className="mainflex">
      {this.state.data.map(data =>{  
         console.log(data._id)
      return(  
      <div className="flex">
      <Card className={classes.card}>
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
        <CardMedia 
          className={classes.media}
          image={basket}
          title="Here is a dish"
          subheader={<PreferandShare />}
        />
        
        <CardContent>  
          
          {this.state.googledata.map(googledata=>{
            return(
              <div>
          <Typography component="p">
            Lugar:{googledata.nameplace}
            </Typography>
            <Typography component="p">
            Ubicación:{googledata.placelocation}
            </Typography>
            </div>     
            );
            })}
         <Typography component="p">
            Precio Anterior: ${data.lastprice}
          </Typography>
           <Typography component="p">
            Precio Actual: ${data.actualprice}
          </Typography>
            <Typography color="secondary" component="p">
              Ahorro: ${data.saving}
           </Typography>
            <Link to="/User">Más sobre este usuario</Link>
       </CardContent>  
             
      </Card>
      </div>
      ) 
      })}       
      </div>
    );
  }
         }

Products.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);

{/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile> */}