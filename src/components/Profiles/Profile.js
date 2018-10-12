import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import orange from '../../images/orange.jpeg';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {Link}  from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import request  from 'superagent';
import beergarden from '../../images/beergarden.jpeg'
import './Profile.css'

const styles = theme =>( {
  card: {
    maxWidth: 500,
     
    marginTop:theme.spacing.unit*5, 
    marginBottom: theme.spacing.unit*3,  
    marginLeft: theme.spacing.unit * 40,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    
  },
  media: {
    objectFit: 'cover',
  },
  media1: {
    height: 0,
    paddingTop: '80%'
  },
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
      position: 'relative',
      minHeight: 200,
    },
    control: {
      position: 'relative',
      marginTop: theme.spacing.unit * 10,
      marginRight: theme.spacing.unit * 2,
    },
    time: {
      maxWidth:250,
      marginLeft: theme.spacing.unit * 1,
      marginTop: theme.spacing.unit * 1,
      marginRight: theme.spacing.unit * 1,
      marginBottom: theme.spacing.unit * 1,
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
    iconSmall: {
      fontSize: 20,
    },
    position: {
     
    },
    button1: {   
      position: 'relative',
      paddingTop: theme.spacing.unit * 1,
      paddingRight: theme.spacing.unit * 20,
    }, 
    
});

class  Profile extends Component {
  constructor(){
    super();
      this.state = {
        user:'',
        data:[],
        googledata:[],
        nameplace:[],
        telefono:[],
        image:[],
        kind: [],
        food: [],
        lastprice: [],
        actualprice:[],
        saving:[],
        firstdate: [],
        lastdate:[],
        initdate:[],
        endhour:[],

      }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
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
    <div >
    {this.state.googledata.map(googledata=> {
     console.log(googledata.user)
 
      return(       
          <div>     
            <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                className={classes.media}
                height="140"
                image={beergarden}
                title="Contemplative Reptile"               
              />
              <Button variant="contained" color="primary" className={classes.button}>
                  Cambiar Foto
                <EditIcon className={classes.leftIcon} /></Button>
              <CardContent>
              <Typography component="p" >
                  Lugar:{googledata.nameplace}                   
                </Typography>
                <Typography component="p" >                 
                  Mi dirección es:{googledata.placelocation} 
                </Typography>
                <Typography component="p" >                 
                  Teléfono de Contacto: {googledata.telefono} 
                </Typography>               
                <Button variant="contained" color="secondary" className={classes.button}>
                    Editar
                <EditIcon className={classes.leftIcon} />
                </Button>            
                </CardContent>
            </CardActionArea>        
          </Card>
          <Button component={Link} to="/Product"
          variant="contained" color="primary" 
          className={classes.button}>     
          Añadir Producto
          <AddIcon className={classes.rightIcon} />
          </Button>
          <div className="mainflex">
          {this.state.data.map(data => {           
            if(localStorage.getItem('user_id')===data.user){
              return(
            <div className="flex">
            <Card className={classes.time}>
              <CardHeader         
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={
                  <Typography onChange={this.handleChange}>
                    Nombre:{data.food}
                  </Typography>
           
                }          
              />
              <CardMedia
                className={classes.media1}
                image={orange}
                title="Contemplative Reptile"
              />
              <CardContent>
              <Typography onChange={this.handleChange}>
                  Tipo: {data.kind}
                </Typography>
                <Typography component="p" onChange={this.handleChange}>
                  Precio Anterior: ${data.lastprice}
                </Typography>
                <Typography component="p" onChange={this.handleChange}>
                  Precio Actual: ${data.actualprice}
                </Typography>
                  <Typography color="secondary" component="p" onChange={this.handleChange}>
                    Ahorro: ${data.saving}
                  </Typography>
                  
                  </CardContent>
                  <Button variant="contained" color="secondary" className={classes.button}>
                    Editar o Actualizar
                <EditIcon className={classes.rightIcon} /></Button>
                <Button variant="contained" color="primary" className={classes.button}>
                    Borrar
                <DeleteIcon className={classes.rightIcon} /></Button>
            </Card> 
            
            </div>  
            )}})}
                  </div>
                 
          </div>  
  
      )    
   })}         
  
          </div>
                              
      )
}}
  

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);