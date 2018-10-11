import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { Typography, Button } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import why from '../../images/why.jpeg';
import joinly from '../../images/joinly.jpeg';
import howi from '../../images/howi.jpeg'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#48B2AB',
      }
  
    },
  });

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 0 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  img: {
    position: 'relative',
    opacity:0.5,   
    width:'100%',
    height: '450px',
    paddingLeft: theme.spacing.unit*7,
    paddingRight: theme.spacing.unit*7,
    
  },
  paragraph: {
    opacity:1,
    position: 'absolute',
    top: theme.spacing.unit * 35,
    paddingRight: theme.spacing.unit *35 ,
    paddingLeft:theme.spacing.unit *35, 
    color: 'black',
    fontSize: '30px'
  },
  button:{   
      
      position: 'absolute',
      top: theme.spacing.unit * 60,
      right: theme.spacing.unit * 12,   
  },
  width: {   
    height: '60px'
  },
  ancho: {
    height: '15px'
  },
  center: {
    marginLeft:'25%',
    
  }
  
});


class Navbar extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
      <MuiThemeProvider>
        
        <AppBar className={classes.width} position="static" color="default">
          <Tabs 
            className={classes.center}
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="on"
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab className={classes.width}label="¿Qué es?" icon={<PersonPinIcon className={classes.ancho}/>} />
            <Tab className={classes.width}label="¿Por qué?" icon={<FavoriteIcon className={classes.ancho}/>} />
            <Tab className={classes.width}label="¿Como Funciona?" icon={<ThumbUp className={classes.ancho}/>} />  
            
          </Tabs>
        </AppBar>
        
        {value === 0 && 

        <TabContainer className={classes.width} >
          
          <img src= {joinly} alt="imagen"className={classes.img}/>
          <Typography paragraph className={classes.paragraph}>
          Somos un equipo dedicado a eliminar el desperdicio de
          comida a través de la innovación tecnológica. 
          </Typography>
          <Button component={ Link } to="/quees" variant="contained" color="secondary" className={classes.button}>
            Leer más
          </Button>
          </TabContainer>}

        {value === 1 && <TabContainer> 
          <img src= {why} alt="imagen"className={classes.img}/>
          <Typography paragraph className={classes.paragraph} >
          En México se desperdicia más del 36% de la comida que se produce  
          </Typography>
          <Button component={ Link } to="/porque" variant="contained" color="secondary" className={classes.button}>
            Leer más
          </Button>
          </TabContainer>}
        {value === 2 && <TabContainer> 
          <img src= {howi} alt="imagen" className={classes.img}/>
          <Typography paragraph className={classes.paragraph} >
          Rentabiliza - Ahorra - Contribuye
          </Typography>
          <Button component={ Link } to="/como"variant="contained" color="secondary" className={classes.button}>
            Leer más
          </Button>
          </TabContainer>}
        </MuiThemeProvider>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);

