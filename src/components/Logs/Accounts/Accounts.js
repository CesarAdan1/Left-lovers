import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Vendor from './Vendor';
import Consumer from './Consumer';
import '../Enter.css'

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        padding: '5%'
    },
    button: { 
        
        width:'100%'
        
    },
    adorns:{

    },
    btn: {
        margin: theme.spacing.unit*3, 
    },

})

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#48B2AB',
      },
    },
  });

class Accounts extends Component {
    render() {
        const{ classes } = this.props;
        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={theme}>
                    <Typography >Selecciona tu tipo de Cuenta</Typography>
                        <div className="flexi">
                            <div className={classes.btn}>
                                <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/LogConsumer">
                                    Comprador
                                </Button>
                                    <Consumer />                          
                            </div>
                            <div className={classes.btn}>
                                <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/Log">
                                    Vendedor
                                </Button>
                                    <Vendor/>                           
                            </div>
                            
                        </div>
                    </MuiThemeProvider>
            </div>
        );
    }
}

Accounts.propTypes = {
    classes: PropTypes.object.isRequired,
  }
  
export default withStyles(styles)(Accounts);
