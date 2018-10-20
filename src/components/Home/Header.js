import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import { createMuiTheme, MuiThemeProvider, IconButton } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import  cereza  from './../../images/cereza.png';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchAppBar from './Searchbar';
import AuthService from '../../Utils/AuthService';
import  LeftLoversBlue  from './../../images/LeftLoversBlue.svg';
import ResponsiveDrawer from './ResponsiveDrawer';

const AuthButton = withRouter(({ history }) => (
  // AuthService.isAuthenticated === true
  localStorage.getItem('jwt') !== null
    ? 
    <div>
      
      <Button color='secondary' onClick={() => {
      AuthService.signout(() => {
        history.push('/')
      });
    }}>Salir</Button>
            <Button  component={Link} to="/profileNotifications">
                <NotificationsIcon color="secondary"/>
            </Button>
            <Button  component={Link} to="/Profile">
               <AccountCircle color="secondary"/>
            </Button>
            </div>
    : 
    <div>
      <Button component={ Link } to='/Enter' color='secondary'>Iniciar Sesión</Button>
      <Button color="secondary"component={Link} to="/Accounts">Únete</Button>
    </div>
));

const styles = theme => ({
  badge: {
    top: 1,
    right: -15,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
  image: {
    width: '30px'
  },
  logo: {
    width: '80px'
  },
});


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

  
class Header extends Component {

    render() {
      const { classes } = this.props;
        return (
            <div>            
               <MuiThemeProvider theme={theme}>
                <AppBar position='static' color="primary">
                    <Toolbar>
                      <ResponsiveDrawer/>
                      <Button component={Link} to="/">
                        <img className={classes.image} src={cereza} alt="logo"/>
                      </Button>
                        <img className={classes.logo} src={LeftLoversBlue} alt="logo"/>
                      <SearchAppBar />  
                      <IconButton aria-label="Cart">
                      <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }}>
                        <ShoppingCartIcon color="secondary"/>
                      </Badge>
                    </IconButton>
                      <AuthButton color="secondary"/>                       
                    </Toolbar>
                </AppBar>
                
              </MuiThemeProvider>
  
            </div>
        );
    }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);