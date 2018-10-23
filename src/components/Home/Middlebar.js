import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import view_module from '../../material-icons/view_module.svg'
import './search.css'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';


const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#0A1F40',
      }
  
    },
  });

const styles = {
  root: {
    paddingTop:0,
    flexGrow: 1,
    height: 5
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#424242'
  },
};

class MiddleBar extends Component{
    render(){
  const { classes } = this.props;

  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={theme}>
        <Paper  className={classes.header}>
            <Toolbar>
              <Button>
                  Filtrar por 
              </Button>
              <input className="search" placeholder="Busca lo que deseas comprar"/>
            </Toolbar>
        </Paper>
      
      </MuiThemeProvider>
    </div>
  );
}
}

MiddleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MiddleBar);