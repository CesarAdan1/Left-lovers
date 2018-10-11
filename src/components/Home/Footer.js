import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar  from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import cerezasMonocromatic from './../../images/cerezasMonocromatic.svg';
import LeftLoversBlack from '../../images/LeftLoversBlack.svg'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import iOs  from '../../images/iOs.png';
import android  from '../../images/android.png';
import './footer.css';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FCE4EC',
      },
      secondary: {
          main: '#313131',
      }
    },
  });

 const styles = {
    
    width: '100px',
    backgroundcolor: '#313131',
    marginLeft: '3px'
}

const stile = {
    width:'30px'
}

const imag = {
    width: '130px',
    height: '39px',
    marginLeft: '2px'
}

class Footer extends Component{
    render() {
        return (
            <div>
              <MuiThemeProvider theme={ theme }>
              
                <AppBar position="static" color="secondary" >
                    <Toolbar>
                        <Button component={Link} to="/">
                        <img style={stile} src={cerezasMonocromatic} alt="logo"/>                   
                        </Button>
                        <img style={styles} src={LeftLoversBlack} alt="logo"/>
                        
                        <Divider color="primary"/>
                        
                        
                        <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
                        <a href="https://twitter.com/" className="fa fa-twitter"></a>
                        <a href="https://www.instagram.com/?hl=es-la" className="fa fa-instagram"></a>
                        
                        <Button color="primary" component={Link} to="/TerminosyCondiciones">
                        Términos y Condiciones
                        </Button>
                        <Button color="primary" component={Link} to="/FAQ">FAQ</Button>  
                        <Button color="primary" component={Link} to="/Nosotros">Nosotros</Button>
                        <Button color="primary" component={Link} to="/Contacto">Contacto</Button> 
                        <Button color="primary">API</Button>  
                        
                        <Divider color="primary"/>
                        
                        <Button>
                            <img style={imag} src={iOs} alt="logo"/>
                        </Button>
                        <Button>
                            <img style={imag} src={android} alt="logo"/>
                        </Button>
                   
                    </Toolbar>
                </AppBar>
              
              </MuiThemeProvider> 
            </div>
        );
    }
}

export default Footer;