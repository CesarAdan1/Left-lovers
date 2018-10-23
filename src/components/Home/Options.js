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

class Options extends Component {
    render(){
        return(
            <div>

               <Button  component={Link} to="/profileNotifications">
                    <NotificationsIcon color="secondary"/>
                </Button>
                <Button  component={Link} to="/Profile">
                    <AccountCircle color="secondary"/>
                </Button>
                <Button>
                    <MailIcon color="secondary"/>
                </Button> 


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