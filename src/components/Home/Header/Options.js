import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import compose from 'recompose/compose';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';
import { createMuiTheme, MuiThemeProvider, IconButton , 
    Typography, Card} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

const styles = theme => ({
     style: {
        color: 'white',
        padding: '0 30px',
        textTransform: "lowercase",
        display:'flex',
        alignItems: 'center',
      },
    
  });

class Options extends Component {
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.style}>
                <Hidden only={['xs','sm']}>
                    <Button  component={Link} to="/profileNotifications">
                        <NotificationsIcon color="secondary"/>
                    </Button>
                    <Button  component={Link} to="/Profile">
                        <AccountCircle color="secondary"/>
                    </Button>
                    <Button>
                        <MailIcon color="secondary"/>
                    </Button> 
                </Hidden>
            
            </div>
        )
    }
}

Options.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
  };
  
  export default compose(
    withStyles(styles),
    withWidth(),
  )(Options);