import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import classNames from 'classnames';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {Snackbar, Typography }from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import AuthService from '../../Utils/AuthService';
import { Redirect } from 'react-router-dom';
import join from '../../images/join.jpeg'
import { createMuiTheme } from '@material-ui/core';
import { Link } from 'react-router-dom'
import './Enter.css';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#48B2AB',
      }
  
    },
  });

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', 
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit*2
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

class Enter extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      redirectToReferrer: false,
      onLoginError: false,
      
    }
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  login = e => {
    e.preventDefault();

    const credentials = {
      email: this.state.email,
      password: this.state.password
    };

    AuthService
      .authenticate(credentials, () => {
        this.setState(() => ({
          redirectToReferrer: true
        }));
      }, () => {
        this.setState({
          onLoginError: true
        });
      });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClose = (event, reason) => {

    this.setState({ onLoginError: false });
  };

  render(){
  const { classes } = this.props;
  const { redirectToReferrer } = this.state;
  const { from } = this.props.location.state || { from: { pathname: '/Profile' } }

    if (redirectToReferrer) {
      return (
        <Redirect to={ from } />
      )
    }
    console.log(this.state)
  return (
  <div className="separate">
      <div className="flex">
          <div className="child">
            <img src={join} />
          </div>
            <div className="space">
              <form className="child" onSubmit={ this.login } className={classes.layout}>
              <Typography>Bienvenido de nuevo</Typography>              
                <FormControl margin="normal" required fullWidth  >
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input id="email" name="email" autoComplete="email" autoFocus 
                  onChange={ this.handleChange }
                  />
                </FormControl>
              
                <FormControl  className={classNames(classes.margin, classes.textField)} required fullWidth >
                      <InputLabel htmlFor="adornment-password">Contraseña</InputLabel>
                    <Input
                     onChange={ this.handleChange }
                     type="text"  
                    />                   
                </FormControl>         
                <Button 
                  type="submit"
                  fullWidth
                  variant="raised"
                  color="secondary"
                  className={classes.submit}
                >
                  Iniciar Sesión
                </Button>
                <Link to={"/Log"}>Crea una cuenta </Link><Typography>y Únete a Nuestro Equipo</Typography>
              </form>
              <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                open={ this.state.onLoginError }
                autoHideDuration={ 2000 }
                onClose={ this.handleClose }
                ContentProps={{
                  'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Authentication failed</span>}
              />

          </div>
        </div>
      </div>
   
  );
}
}

Enter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Enter);