import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import basket from '../../images/basket.jpeg'
import request from 'superagent'
import './Products.css'

const styles = theme => ({
  card: {
    maxWidth:800,   
    marginLeft: theme.spacing.unit*3 ,
    marginRight: theme.spacing.unit*3 ,
    marginBottom: theme.spacing.unit * 1,
  },
  media: {
    height: 0,
    paddingTop: '80%', // 16:9
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
  }
});

class Products extends Component {   
  constructor(props) {
    super();
    this.state = {
      likes: props.l,
      liked: false,
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

  incrementLikes = (e) => {
    e.preventDefault();

    if (this.state.liked === false) {
      this.setState({
        likes: parseInt(this.state.likes) + 1,
        liked: true
      });
    } else {
      this.setState({
        likes: parseInt(this.state.likes) - 1,
        liked: false
      });
    }
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
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography component="p">
            Nombre:{data.food}
            </Typography>
          } 
                                             
        />
        <CardMedia
          className={classes.media}
          image={basket}
          title="Here is a dish"
        />
        <CardContent>  
          <Typography component="p">
            Tipo: {data.kind}
            </Typography> 
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
         
         
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
           
          <IconButton className={ (this.state.liked === true) ? 'liked' : ''}
              onClick={ this.incrementLikes }  aria-label="Add to favorites">
            <FavoriteIcon />{ this.state.likes }
          </IconButton>

          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <Typography paragraph variant="body2">
             Más sobre este usuario
            </Typography>
          
        </CardActions>           
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
