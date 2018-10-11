import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import vol from '../../images/vol.jpeg'
import './Simpletext.css';


const styles = theme => ({
    button: {
        
        marginTop: theme.spacing.unit*38,
        marginLeft: theme.spacing.unit*50,
        marginBottom: theme.spacing.unit*25,
    },
})

class How extends Component {
    render() {
        
        return (
            <div>
                <div className="text">
                <p className="par1">
                Left Lovers pone a disposición esta plataforma para que
                empresas alimenticias, productores de alimentos y al público en general 
                para que juntos evitemos el desperdicio de alimentos.
                <img src={vol} alt="" className="image"/>
                </p>
                </div>
                 
            </div>
            
        );
    }
}

How.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default How;