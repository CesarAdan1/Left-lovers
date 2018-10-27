import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import  cereza  from '../../../images/cereza.png';
import SearchAppBar from './Searchbar';
import Menuopt from './Menuopt';
import AuthService from '../../../Utils/AuthService';
import  LeftLoversBlue  from './../../../images/LeftLoversBlue.svg';
import ResponsiveDrawer from './ResponsiveDrawer';
import './Header.css';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#48B2AB',
        
      },
      secondary: {
        main: '#E10050'
      },
    },
  });

const AuthButton = withRouter(({ history }) => (
  // AuthService.isAuthenticated === true
  localStorage.getItem('jwt') !== null
    ? 
    <div className="displaylost">
      <MuiThemeProvider theme={theme}>
      <Button style={stilo} color='secondary' onClick={() => {
      AuthService.signout(() => {
        history.push('/')
      });
    }}>Salir</Button>
            <Options/>
            </MuiThemeProvider>
            </div>
    : 
    <div>
      <MuiThemeProvider theme={theme}>
      <div className="lost">
        <Button style={styl} component={ Link } variant="contained" to='/Enter' color="primary">
          Iniciar Sesión
        </Button>
        <Button style={styl}  variant="contained" component={Link} to="/Accounts" color="secondary">
          Únete
        </Button>
        </div>
      </MuiThemeProvider>
    </div>
));

const styl = {
    textTransform: 'none',
    fontSize: '15px',
    textFont: 'arial',
    margin: '8px',
    color: 'white',
    border: 'none'
}

const stylo = {
    textTransform: 'none',
    fontSize: '15px',
    textFont: 'arial',
   
}

const stilo ={
     margin: '8px',
    color: 'white',
    textTransform: 'none',
    fontSize: '15px',
    textFont: 'arial',
    marginRight: 0
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
  color:{
    color:'ffff'
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
                              <Hidden only={['md', 'lg', 'xl']}>
                                <ResponsiveDrawer/>
                              </Hidden>
                                  
                                      <Button component={Link} to="/">
                                          <img className={classes.image} src={cereza} alt="logo"/>
                                      </Button>
                                        <img className={classes.logo} src={LeftLoversBlue} alt="logo"/>
                                
                                  <Hidden only={['xs','sm']}>
                                   <SearchAppBar />
                                  </Hidden>
                            
                              <Hidden only={['xs','sm']}>
                                  <Menuopt/>
                              </Hidden>
                              <div className="flex-menu">
                                  <AuthButton />
                                  <div className="posit">
                                      <IconButton className="posit" aria-label="Cart">
                                      <Badge badgeContent={0}  classes={{ badge: classes.badge }} color="default">
                                        <ShoppingCartIcon color="default"/>
                                      </Badge>
                                      </IconButton>
                                  </div>
                             </div>                                         
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