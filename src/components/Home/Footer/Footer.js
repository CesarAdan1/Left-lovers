import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Toolbar  from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import cerezasMonocromatic from '../../../images/cerezasMonocromatic.svg';
import LeftLoversBlack from '../../../images/LeftLoversBlack.svg'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Hidden from '@material-ui/core/Hidden';
import compose from 'recompose/compose';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';
import iOs  from '../../../images/iOs.png';
import android  from '../../../images/android.png';
import './Footer.css';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
          main: '#313131',
      }
    },
  });


 const styles = theme => ({   
   letters: { width: '100px',
        backgroundcolor: '#313131',
        marginLeft: '3px'
 },
    stile: {
        width:'40px',
        
    },
    imagen: {
        marginLeft:0,
        width: '130px',
        height: '39px', 
    },
    footer: {
       
       marginTop:'100%',
       padding: 0,
    },
    logos: {
        
        marginLeft: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit,
    }
})


class Footer extends Component{
    render() {
    const {classes}=this.props;
        return (
            <div  className="foot">
              <MuiThemeProvider theme={ theme }>
                    <AppBar  position="static" className={classes.footer} color="secondary" >
                        <Toolbar>
                            <React.Fragment>
                                <div className={classes.logos}>
                                    
                                        <div className="all_elements" >
                                            <Button component={Link} to="/">
                                                <img className={classes.stile} src={cerezasMonocromatic} alt="logo"/> 
                                                <img className={classes.imagen} src={LeftLoversBlack} alt="logo"/>                   
                                            </Button>      
                                        </div>
                                        <hr></hr>
                                <div className="display">
                                    <div className="wrap">
                                        <ul >
                                        <li className="item_title">Contáctanos</li>
                                            <div className="social_align">
                                                <li className="item_social"><a href="https://www.facebook.com/" className="fa fa-facebook"></a></li> 
                                                <li className="item_social"><a href="https://twitter.com/" className="fa fa-twitter"></a></li>
                                                <li className="item_social"><a href="https://www.instagram.com/?hl=es-la" className="fa fa-instagram"></a></li>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="wrap">
                                        <ul>
                                            <li className="item_title">Rentabiliza - Ahorra - Ayuda</li>
                                            <Link to="/PublicarOfertas" className="linkstylel"><li className="item">Publicar Ofertas</li></Link>
                                            <Link to="/verOfertas" className="linkstylel"><li className="item">Ver Ofertas</li></Link>
                                            <Link to="/Beneficios" className="linkstylel"><li className="item">Beneficios</li></Link>
                                            <Link to="/Ayuda" className="linkstylel"><li className="item">Ayuda a que no se desperdicie comida</li></Link>
                                        </ul>
                                    </div>
                                    <div className="wrap">
                                        <ul >
                                            <li className="item_title">Programas<Link to="/Programas"><a className="link"href="#">Ver más</a></Link></li>
                                            <Link to="/ComedoresComunitarios" className="linkstylel"><li className="item">Comedores Comunitarios<span className="tooltip">Participa</span></li></Link>
                                            <Link to="/Voluntarios" className="linkstylel"><li className="item">Voluntarios<span className="tooltip">Conviértete en un voluntario</span></li></Link>
                                            <Link to="/Colectas" className="linkstylel"><li className="item">Colectas<span className="tooltip"></span></li></Link>
                                            <li className="item"></li>
                                        </ul>
                                    </div>
                                    <div className="wrap">
                                        <ul >
                                            <li className="item_title">Métodos de Pago<Link to="/Métodosdepago"><a className="link"href="#">Ver más</a></Link></li>
                                            <Link to="/tarjetayrecoge" className="linkstylel"><li className="item">Paga con tarjeta y recoge en el establecimiento</li></Link>
                                            <Link to="/Pagaenestablecimiento" className="linkstylel"><li className="item">Paga directo en el establecimiento</li></Link>
                                            <Link to="/Donar" className="linkstylel"><li className="item">Donar</li></Link>
                                           
                                        </ul>
                                    </div>
                                    <div className="wrap">
                                        <ul >
                                            <li className="item_title">Nosotros</li>
                                            <Link  to="/Nosotros" className="linkstylel"><li className="item">Left Lovers</li></Link>
                                            <Link to="/FAQ" className="linkstylel"><li className="item">Preguntas Frecuentes</li></Link>
                                            <Link to="Contacto" className="linkstylel"><li className="item">Contacto</li></Link>
                                            <Link to="/API" className="linkstylel"><li className="item">API</li></Link>
                                        </ul>
                                    </div>
                                    </div>
                                    
                                   
                                        <div className="alignItemse">
                                            <img className={classes.imagen} src={iOs} alt="logo"/>
                                            <img className={classes.imagen} src={android} alt="logo"/>
                                        </div>
                                   
                                
                                    <div >
                                        <ul className="pageDefense">
                                            <li className="itemDos">&copy; 2018 Left Lovers</li>
                                            <Link to="TerminosyCondiciones" className="linkstylel"><li className="itemRight">Términos y Condiciones</li></Link>
                                            <Link to="/Privacidad" className="linkstylel"><li className="itemRight">Aviso de Privacidad</li></Link>
                                            <Link to="/CondicionesdeUso" className="linkstylel"><li className="itemRight">Condiciones de Uso</li></Link>
                                        </ul>
                                    </div>
                                </div>
                            
                            </React.Fragment> 
                              
                        </Toolbar>
                    </AppBar>
                 
              </MuiThemeProvider> 
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
  };
  
  export default compose(
    withStyles(styles),
    withWidth(),
  )(Footer);