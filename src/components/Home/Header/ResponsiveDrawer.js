import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link, withRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider, IconButton,
    Typography } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import request from 'superagent';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#48B2AB',
      },
      secondary: {
        main: '#FCE4EC',
      },
  
    },
  });

  const styles = theme => ({
    
    root: {
      maxWidth: '60%',    
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    },
    imagen: {
        margin:0,
        width: '250px',
        height: '150px',
        opacity: 1
    },
    arrow: {
        zIndex: 1,
    }
  });

     const ListItemTextStyle = { 
         width: 200
          };  
            
          const linkStyles = {
            textTransform: 'none',
            textDecoration: 'none',
            fontSize: 14,
            color: 'black',
            fontFamily: 'Monserrat',
            
          };
          
          const linkStyle = {
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontSize: 14,
            color: 'black',
            fontFamily: 'Monserrat',
            
          };

class ResponsiveDrawer extends Component {
    constructor() {
        super();
    
        this.state = {
          open: false,
          users:[],
          googledata:[]
        };
      }
    componentWillMount(){
        this.mail();
        this.telephone();
    }
    mail = () => {
    request
      .get('http://localhost:3001/api/v1/users')
      .then(response => {
        this.setState({
          users: response.body.users
            
        })
        console.log(response.body.googledata)
      })
      .catch(error =>console.log(error));
  }

  telephone = () => {
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

      toggleDrawer = () => {
        this.setState({
          open: !this.state.open
        });
      }
    
    render(){
        const { classes } = this.props;
        return(
            <div >
              <MuiThemeProvider theme={theme}>
                    <IconButton onClick={ this.toggleDrawer } color="secondary" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                        <Drawer open={ this.state.open } onClose={ this.toggleDrawer }>
                            <div
                            tabIndex={0}
                            role="button"
                            onClick={ this.toggleDrawer }
                            onKeyDown={ this.toggleDrawer }
                            >
                            
                            <List classes={classes.root}>
                                <ListItem>
                                   
                                {this.state.users.map(users =>{
                                    return(
                                        <div>
                                <Typography component="p">
                                    Correo: {users.email}
                                 </Typography>
                                 {this.state.googledata.map(googledata =>{
                                     return(
                             <div>
                                 <Typography component="p">
                                     {googledata.nameplace}
                                </Typography>
                                 <Typography component="p">
                                     Teléfono: {googledata.telefono}
                                </Typography>      
                            </div>
                                  )
                                 })}
                                 </div>
                             ) })}   
                             
                             </ListItem>
                                <Divider/>
                                    <ListItem button color="primary">
                                            <Link style={ linkStyles } to="/quees" >¿Qué es?</Link>
                                    </ListItem >
                                    <ListItem button color="primary">
                                            <Link style={ linkStyles } to="/como" >¿Cómo Funciona?</Link>
                                        
                                    </ListItem>
                                    <ListItem button color="primary">
                                    
                                        <Link style={ linkStyles } to="/porque" >¿Por qué?</Link>
                                        
                                    </ListItem>
                                    <ListItem button>
                                    <Link style={ linkStyles } to='/Nosotros'>
                                        Nosotros
                                    </Link>
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                    <Link style={ linkStyle } to='/FAQ'>
                                        FAQ
                                    </Link>
                                    </ListItem>
                                </List>
                                </div>
                            </Drawer>

                 </MuiThemeProvider>
            </div>
        )
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ResponsiveDrawer);
