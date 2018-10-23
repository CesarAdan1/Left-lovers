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
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import StarBorder from '@material-ui/icons/StarBorder';
import Divider from '@material-ui/core/Divider';
//import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import albondigas from '../../../images/albondigas.jpeg';


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
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    },
    imagen: {
        width: '250px',
        opacity: 0.5
    },
    arrow: {
        zIndex: 1,
    }
  });
  
class ResponsiveDrawer extends Component {
    constructor() {
        super();
    
        this.state = {
          open: false,
          open1: true

        };
      }
    
      toggleDrawer = () => {
        this.setState({
          open: !this.state.open
        });
      }
      handleClick = () => {
        this.setState(state => ({ open1: !state.open1 }));
      };
    
    render(){
        const { classes } = this.props;
        const ListItemTextStyle = {
            width: 200
          };  
            
          const linkStyles = {
            textTransform: 'none',
            textDecoration: 'none',
            fontSize: 14,
            fontFamily: 'Roboto',
            fontWeight: 500,
            color: 'black',
            fontFamily: 'Monserrat',
            backgroundColor: '#48B2AB'
          };
          
          const linkStyle = {
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontSize: 14,
            fontFamily: 'Roboto',
            fontWeight: 500,
            color: 'black',
            fontFamily: 'Monserrat',
            backgroundColor: '#48B2AB'
          };

        return(
            <div>
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
                            <List color="primary">
                                <img className={classes.imagen} src={albondigas} alt="logo"/>
                                {/* <ListItem>
                                <ListItemText style={ ListItemTextStyle } primary="Dashboard" />
                                </ListItem> */}
                                <ListItem color="primary"button onClick={this.handleClick}>       
                                    {this.state.open1 ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                    <Collapse className={classes.arrow} color="primary" in={this.state.open1} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                        <ListItem color="primary" button className={classes.nested}>
                                                <ListItemIcon>
                                                    <StarBorder />
                                                </ListItemIcon>
                                            <ListItemText inset primary="Starred" />
                                        </ListItem>
                                        </List>
                                    </Collapse>
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