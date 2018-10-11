import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import team from '../../images/team.jpeg'
import './What.css';

const styles = theme => ({
    button: {
        
        marginTop: theme.spacing.unit*38,
        marginLeft: theme.spacing.unit*50,
        marginBottom: theme.spacing.unit*25,
    },
})

class What extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="container">
               <h2></h2>
                    <p>Left Lovers hace las siguientes actividades:</p>

                    <div className="clearfix">
                    <div className="img-container">
                        <img src={team} alt="Italy" />
                        <p>Ponemos a disposición la plataforma digital  para que los 
                            productores y vendedores de alimentos pueden ofertar sus productos y
                            los personas puedan comprarlas a un precio menor, de esta forma la 
                            comida no se desperdicia y se obtiene un ahorro para ambas partes. 
                        </p> 
                    </div>
                    <div className="img-container">
                        <img src={team} alt="Forest" />
                        <p>
                         Ponemos a disposición a todo el público programas de voluntariado
                         para empacar y transportar la comida donada por fundaciones, restaurantes,
                         personas con el propósito de escoger un uso adecuado para cada tipo de 
                         comida que nos llegue como: comida en buen estado que todavía se puede
                         consumir o aquella a la que se puede dar otro uso como en la siembra o 
                         para fábricas de alimentos para mascotas.
                        </p> 
                    </div>
                    
                    <div className="img-container">
                        <img src={team} alt="Mountains" />
                        <p>
                        Note that we also use the clearfix hack to take care of the layout flow, and that add the box-sizing property to make sure that the image container doesn't break due to extra padding. 
                        Try to remove this code to see the effect.
                        </p> 
                    </div>
                    </div>

        
                    </div>
        );
    }
}

What.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(What);