import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import compose from 'recompose/compose';
import Options from './Options';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth'
import Badge from '@material-ui/core/Badge';
import { createMuiTheme, MuiThemeProvider, IconButton , 
  Typography, Card} from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import  cereza  from './../../images/cereza.png';
import SearchAppBar from './Searchbar';
import AuthService from '../../Utils/AuthService';
import  LeftLoversBlue  from './../../images/LeftLoversBlue.svg';
import ResponsiveDrawer from './ResponsiveDrawer';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#48B2AB',
        
      },
      secondary: {
        main: '#FAFAFA'
      },
      
    },
  });

const AuthButton = withRouter(({ history }) => (
  // AuthService.isAuthenticated === true
  localStorage.getItem('jwt') !== null
    ? 
    <div>
      <MuiThemeProvider theme={theme}>
      <Button color='primary' onClick={() => {
      AuthService.signout(() => {
        history.push('/')
      });
    }}><Typography color="secondary">Salir</Typography></Button>
            <Options/>
            </MuiThemeProvider>
            </div>
    : 
    <div>
      <MuiThemeProvider theme={theme}>
        <Button component={ Link } variant="contained" to='/Enter'  color="primary">
          <Typography style={stylos}>Iniciar Sesión</Typography>
        </Button>
        <Button color="secondary" variant="contained" component={Link} to="/Accounts">
          <Typography style={stylos}>Únete</Typography>
        </Button>
      </MuiThemeProvider>
    </div>
));

const stylos = {
  fontSize: '14px',
  color:"white"
}

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
  card: {
    backgroundColor: 'transparent',
    borderStyle: 'none',
  },
  
  
});

const space = {
   padding: '5px',
   marginLeft: '4px'
}
  
class Header extends Component {

    render() {
      const { classes } = this.props;
        return (
            <div>            
               <MuiThemeProvider theme={theme}>
                <AppBar position='static' color="primary">
                    <Toolbar>
                          <Hidden only={['md', 'lg', 'sm', 'xl']}>
                            <ResponsiveDrawer/>
                          </Hidden>
                          <Button component={Link} to="/">
                            <img className={classes.image} src={cereza} alt="logo"/>
                          </Button>
                            <img className={classes.logo} src={LeftLoversBlue} alt="logo"/>
                          <Hidden only={['xs']}>
                            <SearchAppBar /> 
                          </Hidden>
                      <Card className={classes.card}> 
                          <div  className="container-flex">
                              <Button component={ Link } to="/quees" color="secondary" >
                                  <Typography style={stylos}>¿Qué es?</Typography>
                              </Button>
                              <Button  component={ Link } to="/como" color="secondary">
                                <Typography style={stylos}>¿Cómo Funciona?</Typography>
                              </Button>
                              <Button  component={ Link } to="/porque" color="secondary">
                                <Typography style={stylos}>¿Por qué?</Typography>
                              </Button>
                          </div>
                      </Card>
                      <IconButton style={space} aria-label="Cart">
                      <Badge badgeContent={0}  classes={{ badge: classes.badge }}>
                        <ShoppingCartIcon color="default"/>
                      </Badge>
                      </IconButton>
                      <AuthButton  style={space} color="secondary"/>                                             
                    </Toolbar>
                    
                    
                </AppBar>
                
              </MuiThemeProvider>
  
            </div>
        );
    }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default compose(
  withStyles(styles),
  withWidth(),
)(Header);