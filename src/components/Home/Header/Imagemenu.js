import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircle from '@material-ui/icons/AccountCircle'
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import albondigas from '../../../images/albondigas.jpeg';
import StarBorder from '@material-ui/icons/StarBorder';
import { relative } from 'path';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    },
    imagen: {
        
        paddingTop: 0,
        width: '350px',
        height: '200px',
        opacity: 0.5
    },
    arrow: {
        zIndex: 1,
    }
  });


class Imagemenu extends Component {
    constructor(){
        super();

        this.state = {
            open:true
        }
    }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

    render(){
        const { classes } = this.props;

        const linkStyles = {
            textTransform: 'none',
            textDecoration: 'none',
            fontSize: 14,
            fontFamily: 'Roboto',
            fontWeight: 500,
            color: 'black',
            fontFamily: 'Monserrat',
            backgroundColor: '#48B2AB'
          };

        const arrow = {
            position: 'relative',
            marginBottom: '2px',
            marginLeft: '1px'
        }

        const row = {

        }

        const imagine = {
            marginBottom: 0,
            display: 'flex',
            justifyContent: 'space-between'

        }

        return(
            <div>

                 <List color="primary">
                 <List >
                    <ListItem color="primary" button onClick={this.handleClick}>
                            <img className={classes.imagen} src={albondigas} alt="logo"/>
                        <div style={imagine}>
                                <AccountCircle />    
                            {this.state.open ? <ArrowDropDown /> : <ArrowDropUp /> }
                        </div>
                        </ListItem>
                </List>  
                        <Collapse className={classes.arrow} color="primary" in={this.state.open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem color="primary" button className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                   <ListItemText inset primary="Starred" />
                                 </ListItem>
                            </List>
                        </Collapse>
                    </List>
            </div>
        )
    }
}

Imagemenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Imagemenu);