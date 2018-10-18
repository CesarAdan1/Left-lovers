import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
};

class MiddleBar extends Component{
    render(){
  const { classes } = this.props;

  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Filtrar por:
          </Typography>
        </Toolbar>
      </AppBar>
      </MuiThemeProvider>
    </div>
  );
}
}

MiddleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MiddleBar);