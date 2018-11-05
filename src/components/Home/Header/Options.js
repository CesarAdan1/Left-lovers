import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

const styles = theme => ({
     style: {
        textTransform: "lowercase",
        display:'flex',
        alignItems: 'center',
      },
      color: {
          margin: 'auto',
          color: 'white',
          padding: 0,
      }
    
  });

class Options extends Component {
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.style}>
                <Hidden only={['xs','sm']}>
                    <IconButton  component={Link} to="/profileNotifications">
                        <NotificationsIcon className={classes.color}/>
                    </IconButton>
                    <IconButton  component={Link} to="/Profile">
                        <AccountCircle className={classes.color}/>
                    </IconButton>
                    <IconButton>
                        <MailIcon className={classes.color}/>
                    </IconButton> 
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