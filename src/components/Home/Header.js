import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import  cereza  from './../../images/cereza.png';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchAppBar from './Searchbar';
import AuthService from '../../Utils/AuthService';
import  LeftLoversBlue  from './../../images/LeftLoversBlue.svg';

const AuthButton = withRouter(({ history }) => (
  // AuthService.isAuthenticated === true
  localStorage.getItem('jwt') !== null
    ? 
    <div><Button color='default' onClick={() => {
      AuthService.signout(() => {
        history.push('/')
      });
    }}>Salir  </Button><NotificationsIcon />
               <AccountCircle color="default" component={Link} to="/Profile" /></div>
    : <Button component={ Link } to='/Enter' color='default'>Iniciar Sesión</Button>
));


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

 const styles = {
    
    width: '30px',
   
}

const stile = {
  width: '80px'
}

class Header extends Component {
    render() {
        return (
            <div>
               <MuiThemeProvider theme={theme}>
                <AppBar position='static' color="primary">
                    <Toolbar>
                  <Button component={Link} to="/">
                  <img style={styles} src={cereza} alt="logo"/>
                  </Button>
                  <img style={stile} src={LeftLoversBlue} alt="logo"/>
                    <SearchAppBar
                        
                    />

   
                    <AuthButton color="secondary"/>
                    <Button color="secondary"component={Link} to="/únete">Únete</Button>
                    
                    </Toolbar>
                </AppBar>
                
              </MuiThemeProvider>
  
            </div>
        );
    }
}

export default Header;