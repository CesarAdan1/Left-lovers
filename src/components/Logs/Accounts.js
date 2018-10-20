import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
    button: {
        
        marginTop: theme.spacing.unit*38,
        marginLeft: theme.spacing.unit*50,
        marginBottom: theme.spacing.unit*23,
    },
})

class Accounts extends Component {

    render() {
        const{ classes } = this.props;

        return (
            <div>
                <h1>Escoge tu tipo de cuenta</h1>

               <Button className={classes.button} component={Link} to="/Log">
                Vendedor/Productor
              </Button>
              <Button className={classes.button} component={Link} to="/LogConsumer">
                Consumidor
              </Button>
              {/* <Button className={classes.button} component={Link} to="/CommonUser">Usuario</Button> */}
            </div>
        );
    }
}

Accounts.propTypes = {
    classes: PropTypes.object.isRequired,
  }
  
export default withStyles(styles)(Accounts);
