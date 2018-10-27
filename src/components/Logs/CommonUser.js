import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import Checkbox from '@material-ui/core/Checkbox';

import {Link} from 'react-router-dom';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
 
  
  form: {
    // Fix IE11 issue.
    width: '30%', // Fix IE11 issue.
    marginTop: theme.spacing.unit*10,
    marginLeft: theme.spacing.unit*60,
    marginBottom: theme.spacing.unit*25,
  },
  form1: {
    width:'30%',
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit*25,
  },

  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});

class CommonUser extends Component {
  state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

   render(){
  const { classes } = this.props;

  return (
      <div>
        <Card>
          <form className={classes.form}>
         
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
              </FormControl>
              <FormControl  margin="normal" required fullWidth className ={classes.textField}>
              <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <Input
                  id="adornment-password" 
                  type={this.state.showPassword ? 'text' : 'password'}
                  value={this.state.password}           
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            </FormControl>
            {
                <Checkbox
                  
                  value="Obligatorio"
                  label=""
                /> 
              }
              He leído y Acepto los <Button component={Link} to="/Terms">Términos y Condiciones</Button>         
            <Button
              type="submit"
              fullWidth
              variant="raised"
              color="primary"
              className={classes.submit}
            >
              Crear Cuenta
            </Button>      
                  
                  <p className={classes.form1}>ó</p>
              <Button
              type="submit"
              fullWidth
              variant="raised"
              color="primary"
              className={classes.submit}
            >
              Inicia Sesión con Facebook
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="raised"
              color="primary"
              className={classes.submit}
            >
              Inicia Sesión con Google
            </Button>
          </form>
      </Card>
    </div>
        
  );
}
 }

CommonUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommonUser);
