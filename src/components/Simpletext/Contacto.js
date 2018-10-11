import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    button: {
        
        marginTop: theme.spacing.unit*38,
        marginLeft: theme.spacing.unit*50,
        marginBottom: theme.spacing.unit*25,
    },
})

class Contacto extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.button}>
                These are Contacto and Conditions
            </div>
        );
    }
}

Contacto.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contacto);